// import { useRef } from 'react';
// import { useFullscreen } from 'rooks';
import { func, string } from 'prop-types';

// import { tablet_breakpoint } from 'config/constants';
// import { useMediaQuery } from 'react-responsive';
import WebpPicture from 'components/common/WebpPicture';

import styles from './motion.module.scss';

const GraphicProjectPreview = ({ media_filename, name, openModal }) => {
  // const isMobile = useMediaQuery({
  //   maxWidth: tablet_breakpoint - 1,
  // });
  // const fullscreenContainerRef = useRef(null);
  // const { isFullscreenAvailable, isFullscreenEnabled, toggleFullscreen } =
  //   useFullscreen({
  //     target: fullscreenContainerRef,
  //   });

  // const onPreviewButtonClick = () => {
  //   if (isMobile && isFullscreenAvailable) {
  //     toggleFullscreen();
  //   } else {
  //     openModal({ name, media_filename });
  //   }
  // };

  const onPreviewButtonClick = () => {
    openModal({ name, media_filename });
  };

  return (
    <li className={styles.project_preview}>
      <WebpPicture
        // ref={fullscreenContainerRef}
        containerClassName={styles.project_preview_picture}
        imgClassName={styles.project_preview_image}
        pathname="/videos/portfolio/motion/"
        filename={`${media_filename}_preview`}
        alt={name}
        // data-fullscreen-enabled={isFullscreenEnabled}
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
  media_filename: string.isRequired,
  name: string.isRequired,
  openModal: func.isRequired,
};

export default GraphicProjectPreview;
