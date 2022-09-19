import { string, arrayOf } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpAnimation from 'components/common/WebpAnimation';
import styles from './summary_section.module.scss';

const Summary = ({ summary }) => {
  const shouldRenderSummary = summary && summary.length > 0;

  if (!shouldRenderSummary) return null;
  return (
    <div className={styles.summary}>
      <h2 className={styles.summary_title}>Project Summary:</h2>
      {summary.map((paragraph) => (
        <p
          className={styles.summary_text}
          key={paragraph
            .split(' ')
            .map((word) => word[0])
            .join('')}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

const SummarySection = ({ summary, name, preview_animation_filename }) => {
  const isDesktop = useMediaQuery({
    minWidth: desktop_breakpoint,
  });
  const shouldRenderPreviewAnimation =
    preview_animation_filename && preview_animation_filename.length > 0;
  return (
    <>
      {!isDesktop && shouldRenderPreviewAnimation && (
        <section className={styles.preview_animation_picture_mobile_container}>
          <WebpAnimation
            containerClassName={styles.preview_animation_picture_mobile}
            imgClassName={styles.preview_animation_image_mobile}
            pathname="/images/portfolio/uxui/"
            filename={preview_animation_filename}
            alt={`${name} preview`}
          />
        </section>
      )}
      <section
        className={styles.container}
        style={{
          marginBlockStart:
            !isDesktop && !shouldRenderPreviewAnimation ? 20 : 0,
        }}
      >
        <Summary summary={summary} />
        {isDesktop && shouldRenderPreviewAnimation && (
          <WebpAnimation
            containerClassName={styles.preview_animation_picture}
            imgClassName={styles.preview_animation_image}
            pathname="/images/portfolio/uxui/"
            filename={preview_animation_filename}
            alt={`${name} preview`}
          />
        )}
      </section>
    </>
  );
};

Summary.propTypes = {
  summary: arrayOf(string),
};

Summary.defaultProps = {
  summary: [],
};

SummarySection.propTypes = {
  summary: arrayOf(string),
  name: string,
  preview_animation_filename: string,
};

SummarySection.defaultProps = {
  summary: [],
  name: '',
  preview_animation_filename: '',
};

export default SummarySection;
