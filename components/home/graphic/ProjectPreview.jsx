/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { string } from 'prop-types';
import styles from './graphic.module.scss';

const UxUiProjectPreview = ({ preview_image_filename, name }) => {
  return (
    <li className={styles.project_preview}>
      <picture className={styles.project_preview_picture}>
        <source
          srcSet={`/images/portfolio/graphic/${preview_image_filename}.webp`}
          type="image/webp"
        />
        <source
          srcSet={`/images/portfolio/graphic/${preview_image_filename}.png`}
          type="image/png"
        />
        <img
          className={styles.project_preview_image}
          src={`/images/portfolio/graphic/${preview_image_filename}.webp`}
          alt={name}
        />
      </picture>
    </li>
  );
};

UxUiProjectPreview.propTypes = {
  preview_image_filename: string.isRequired,
  name: string.isRequired,
};

export default UxUiProjectPreview;
