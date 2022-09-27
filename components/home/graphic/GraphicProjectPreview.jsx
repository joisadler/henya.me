/* eslint-disable react-hooks/exhaustive-deps */
import { string, func } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './graphic.module.scss';

const GraphicProjectPreview = ({ preview_image_filename, name, openModal }) => {
  return (
    <li className={styles.project_preview}>
      <WebpPicture
        containerClassName={styles.project_preview_picture}
        imgClassName={styles.project_preview_image}
        pathname="/images/portfolio/graphic/"
        filename={preview_image_filename}
        alt={name}
      />
      <button
        type="button"
        onClick={() => openModal({ name, preview_image_filename })}
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
