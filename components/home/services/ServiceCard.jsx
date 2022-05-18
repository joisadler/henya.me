import React from 'react';
import { string } from 'prop-types';
import styles from './services.module.scss';

const ServiceCard = ({ title, description, img_src }) => {
  return (
    <li className={styles.service_card}>
      <div className={styles.service_card_top}>
        <img src={img_src} alt={title} className={styles.service_card_image} />
        <h2 className={styles.service_card_title}>{title}</h2>
      </div>
      <p className={styles.service_card_description}>{description}</p>
    </li>
  );
};

ServiceCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  img_src: string.isRequired,
};

export default ServiceCard;
