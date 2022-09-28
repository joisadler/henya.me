import { useRef } from 'react';
import { useFullscreen } from 'rooks';
import { string, func } from 'prop-types';
import { tablet_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpPicture from 'components/common/WebpPicture';
import styles from './graphic.module.scss';

const GraphicProjectPreview = ({ preview_image_filename, name, openModal }) => {
  const isMobile = useMediaQuery({
    maxWidth: tablet_breakpoint - 1,
  });
  const fullscreenContainerRef = useRef(null);
  const { isFullscreenAvailable, toggleFullscreen } = useFullscreen({
    target: fullscreenContainerRef,
  });

  const onPreviewButtonClick = () => {
    if (isMobile && isFullscreenAvailable) {
      toggleFullscreen();
    } else {
      openModal({ name, preview_image_filename });
    }
  };

  return (
    <li className={styles.project_preview}>
      <WebpPicture
        ref={fullscreenContainerRef}
        containerClassName={styles.project_preview_picture}
        imgClassName={styles.project_preview_image}
        pathname="/images/portfolio/graphic/"
        filename={preview_image_filename}
        alt={name}
      />
      <button
        type="button"
        onClick={onPreviewButtonClick}
        className={styles.project_preview_button}
      >
        <h3 className={styles.project_name}>{name}</h3>
      </button>
    </li>
  );
};

GraphicProjectPreview.propTypes = {
  preview_image_filename: string.isRequired,
  name: string.isRequired,
  openModal: func.isRequired,
};

export default GraphicProjectPreview;
