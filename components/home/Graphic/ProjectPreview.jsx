/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './graphic.module.scss';

const UxUiProjectPreview = ({ preview_image_filename, name }) => {
  return (
    <li className={styles.project_preview}>
      <WebpPicture
        containerClassName={styles.project_preview_picture}
        imgClassName={styles.project_preview_image}
        pathname="/images/portfolio/graphic/"
        filename={preview_image_filename}
        alt={name}
      />
      {/* <a href="" className={styles.project_preview_link}>
        Name
      </a> */}
    </li>
  );
};

UxUiProjectPreview.propTypes = {
  preview_image_filename: string.isRequired,
  name: string.isRequired,
};

export default UxUiProjectPreview;
