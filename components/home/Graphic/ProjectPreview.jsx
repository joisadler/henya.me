/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { string } from 'prop-types';
import styles from './graphic.module.scss';

const UxUiProjectPreview = ({ preview_image, name }) => {
  return (
    <li className={styles.project_preview}>
      <img
        src={preview_image}
        alt={name}
        className={styles.project_preview_image}
      />
    </li>
  );
};

UxUiProjectPreview.propTypes = {
  preview_image: string.isRequired,
  name: string.isRequired,
};

export default UxUiProjectPreview;
