import { string, arrayOf } from 'prop-types';
import { desktop_breakpoint, maastricht_blue } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpAnimation from 'components/common/WebpAnimation';
import textToKey from 'utils/textToKey';
import styles from './summary_section.module.scss';

const Summary = ({ summary, name, device_type }) => {
  // const shouldRenderSummary = summary && summary.length > 0;

  return (
    <div className={styles.summary} data-device-type={device_type}>
      <h2 className={styles.summary_title}>Oh no!</h2>
      <p className={styles.summary_text}>
        {`The full case study for the ${name} project is not yet complete.
    But you can take a look at the `}
        <a href="#final_prototype" className={styles.summary_link}>
          prototype
        </a>
      </p>
    </div>
  );
};

const SummarySection = ({
  summary,
  name,
  preview_animation_filename,
  device_type,
}) => {
  const isDesktop = useMediaQuery({
    minWidth: desktop_breakpoint,
  });
  const shouldRenderSummary = summary && summary.length > 0;
  const shouldRenderPreviewAnimation =
    preview_animation_filename && preview_animation_filename.length > 0;
  return (
    <>
      {!isDesktop && shouldRenderPreviewAnimation && (
        <section
          className={styles.preview_animation_picture_mobile_container}
          data-device-type={device_type}
        >
          <WebpAnimation
            containerClassName={styles.preview_animation_picture_mobile}
            imgClassName={styles.preview_animation_image_mobile}
            pathname="/images/portfolio/uxui/"
            filename={preview_animation_filename}
            alt={`${name} preview`}
            data-device-type={device_type}
          />
          <a
            href="#final_prototype"
            className={styles.preview_animation_link_to_prototype}
          >
            Go to Prototype
          </a>
        </section>
      )}
      {shouldRenderSummary && (
        <div className={styles.background}>
          <section
            className={styles.container}
            style={{
              marginBlockStart:
                !isDesktop && !shouldRenderPreviewAnimation ? 20 : 0,
            }}
          >
            <Summary summary={summary} name={name} device_type={device_type} />
            {isDesktop && shouldRenderPreviewAnimation && (
              <div
                className={styles.preview_animation_picture_container}
                data-device-type={device_type}
              >
                <WebpAnimation
                  containerClassName={styles.preview_animation_picture}
                  imgClassName={styles.preview_animation_image}
                  pathname="/images/portfolio/uxui/"
                  filename={preview_animation_filename}
                  alt={`${name} preview`}
                />
                <a
                  href="#final_prototype"
                  className={styles.preview_animation_link_to_prototype}
                >
                  Go to Prototype
                </a>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

Summary.propTypes = {
  summary: arrayOf(string),
  name: string,
  device_type: string.isRequired,
};

Summary.defaultProps = {
  summary: [],
  name: '',
};

SummarySection.propTypes = {
  summary: arrayOf(string),
  name: string,
  preview_animation_filename: string,
  device_type: string.isRequired,
};

SummarySection.defaultProps = {
  summary: [],
  name: '',
  preview_animation_filename: '',
};

export default SummarySection;
