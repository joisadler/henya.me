import React, { useState } from 'react';
import { arrayOf, shape, number, string } from 'prop-types';
import RightArrowIcon from 'components/icons/RightArrowIcon';
import ProjectPreview from './ProjectPreview';
import styles from './graphic.module.scss';

const Graphic = ({ projects }) => {
  const [isAllItemsShown, setIsAllItemsShown] = useState(false);

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
          {itemsToShow.map((project) => {
            const { id } = project;
            return <ProjectPreview key={id} {...project} />;
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
    </section>
  );
};

Graphic.propTypes = {
  projects: arrayOf(
    shape({
      id: number.isRequired,
      preview_image: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default Graphic;
