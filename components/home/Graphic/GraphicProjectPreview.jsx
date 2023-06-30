import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { tablet_breakpoint } from 'config/constants';
import { func, string } from 'prop-types';
import { useFullscreen } from 'rooks';

import WebpPicture from 'components/common/WebpPicture';

import styles from './graphic.module.scss';

const GraphicProjectPreview = ({ image_filename, name, openModal }) => {
  const isMobile = useMediaQuery({
    maxWidth: tablet_breakpoint - 1,
  });
  const fullscreenContainerRef = useRef(null);
  const { isFullscreenAvailable, isFullscreenEnabled, toggleFullscreen } =
    useFullscreen({
      target: fullscreenContainerRef,
    });

  const onPreviewButtonClick = () => {
    if (isMobile && isFullscreenAvailable) {
      toggleFullscreen();
    } else {
      openModal({ name, image_filename });
    }
  };

  return (
    <li className={styles.project_preview}>
      <WebpPicture
        ref={fullscreenContainerRef}
        containerClassName={styles.project_preview_picture}
        imgClassName={styles.project_preview_image}
        pathname="/images/portfolio/graphic/"
        filename={`${image_filename}_preview`}
        alt={name}
        data-fullscreen-enabled={isFullscreenEnabled}
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
  image_filename: string.isRequired,
  name: string.isRequired,
  openModal: func.isRequired,
};

export default GraphicProjectPreview;