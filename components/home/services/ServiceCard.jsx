import { string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './services.module.scss';

const ServiceCard = ({ title, description, pathname, filename }) => {
  return (
    <li className={styles.service_card}>
      <div className={styles.service_card_top}>
        <WebpPicture
          containerClassName={styles.service_card_image}
          pathname={pathname}
          filename={filename}
        />
        <h2 className={styles.service_card_title}>{title}</h2>
      </div>
      <p className={styles.service_card_description}>{description}</p>
    </li>
  );
};

ServiceCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  pathname: string.isRequired,
  filename: string.isRequired,
};

export default ServiceCard;
