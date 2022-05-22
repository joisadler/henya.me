/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { string } from 'prop-types';
import styles from './graphic.module.scss';

const UxUiProjectPreview = ({ preview_image_filename, name }) => {
  return (
    <li className={styles.project_preview}>
      <picture className={styles.project_preview_image}>
        <source srcSet={`${preview_image_filename}.webp`} type="image/webp" />
        <source srcSet={`${preview_image_filename}.png`} type="image/png" />
        <img
          style={{ width: '100%', height: '100%' }}
          src={`${preview_image_filename}.png`}
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
