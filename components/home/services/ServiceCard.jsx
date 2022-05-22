import React from 'react';
import { string } from 'prop-types';
import styles from './services.module.scss';

const ServiceCard = ({ title, description, img_src_filename }) => {
  return (
    <li className={styles.service_card}>
      <div className={styles.service_card_top}>
        <picture className={styles.service_card_image}>
          <source srcSet={`${img_src_filename}.webp`} type="image/webp" />
          <source srcSet={`${img_src_filename}.png`} type="image/png" />
          <img
            style={{ width: '100%', height: '100%' }}
            src={`${img_src_filename}.png`}
            alt={title}
          />
        </picture>
        <h2 className={styles.service_card_title}>{title}</h2>
      </div>
      <p className={styles.service_card_description}>{description}</p>
    </li>
  );
};

ServiceCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  img_src_filename: string.isRequired,
};

export default ServiceCard;
