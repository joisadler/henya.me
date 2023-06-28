import { string, arrayOf } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpAnimation from 'components/common/WebpAnimation';
import styles from './summary_section.module.scss';

const Summary = ({ summary, device_type }) => {
  const renderSummary = () => {
    return summary.map(paragraph => (
      <p
        className={styles.summary_text}
        key={paragraph
          .split(' ')
          .map(word => word[0])
          .join('')}
      >
        {paragraph}
      </p>
    ));
  };
  return (
    <div className={styles.summary} data-device-type={device_type}>
      {renderSummary()}
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
            <Summary summary={summary} device_type={device_type} />
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
  device_type: string.isRequired,
};

Summary.defaultProps = {
  summary: [],
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
