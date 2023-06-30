import { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import Modal from 'components/common/Modal';
import RightArrowIcon from 'components/icons/RightArrowIcon';

import ProjectPreview from './MotionProjectPreview';

import styles from './motion.module.scss';

const Motion = ({ projects }) => {
  const [isAllItemsShown, setIsAllItemsShown] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    name: '',
    media_filename: '',
  });

  const openModal = ({ name, media_filename }) => {
    setModalState({
      isOpen: true,
      name,
      media_filename,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      name: '',
      media_filename: '',
    });
  };

  const getModalChildren = () => {
    const { media_filename } = modalState;
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        className={styles.project_preview_image_enlarged}
        controls
        autoPlay
        onClick={closeModal}
      >
        {/* <source
          src={`/videos/portfolio/motion/${media_filename}_video.webm`}
          type="video/webm"
        /> */}
        <source
          src={`/videos/portfolio/motion/${media_filename}_video.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    );
  };

  const onShowMoreClick = () => {
    setIsAllItemsShown(true);
  };

  const itemsToShow = (() => {
    if (isAllItemsShown) return projects;
    return projects.slice(0, 4);
  })();

  return (
    <section id="motion" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Motion Design</h2>
        <ul className={styles.projects_list}>
          {itemsToShow.map(project => {
            const { id } = project;
            return (
              <ProjectPreview key={id} openModal={openModal} {...project} />
            );
          })}
        </ul>
        {!isAllItemsShown && (
          <div
            className={styles.view_more_button}
            onClick={onShowMoreClick}
            role="presentation"
          >
            <span className={styles.view_more_button_text}>View More</span>
            <RightArrowIcon className={styles.right_arrow_icon} color="#fff" />
          </div>
        )}
      </div>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={modalState.isOpen}
        onRequestClose={closeModal}
        contentLabel={modalState.name}
      >
        {getModalChildren()}
      </Modal>
    </section>
  );
};

Motion.propTypes = {
  projects: arrayOf(
    shape({
      id: number.isRequired,
      media_filename: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default Motion;
