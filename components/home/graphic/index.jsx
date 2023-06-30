import { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import Modal from 'components/common/Modal';
import WebpPicture from 'components/common/WebpPicture';
import RightArrowIcon from 'components/icons/RightArrowIcon';

import ProjectPreview from './GraphicProjectPreview';

import styles from './graphic.module.scss';

const Graphic = ({ projects }) => {
  const [isAllItemsShown, setIsAllItemsShown] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    name: '',
    image_filename: '',
  });

  const openModal = ({ name, image_filename }) => {
    setModalState({
      isOpen: true,
      name,
      image_filename,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      name: '',
      image_filename: '',
    });
  };

  const getModalChildren = () => {
    const { name, image_filename } = modalState;
    return (
      <WebpPicture
        containerClassName={styles.project_preview_picture_enlarged}
        imgClassName={styles.project_preview_image_enlarged}
        pathname="/images/portfolio/graphic/"
        filename={`${image_filename}_full`}
        alt={name}
        onClick={closeModal}
      />
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
    <section id="graphic" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Graphic Design</h2>
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

Graphic.propTypes = {
  projects: arrayOf(
    shape({
      id: number.isRequired,
      image_filename: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default Graphic;
