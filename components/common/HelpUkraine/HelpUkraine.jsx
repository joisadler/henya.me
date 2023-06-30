import { bool, func } from 'prop-types';

import WebpPicture from '../WebpAnimation';

import styles from './help_ukraine.module.scss';

const HelpUkraine = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div content-label="Help Ukraine!" className={styles.container}>
      <button type="button" onClick={onClose} className={styles.close_button}>
        &#x2715;
      </button>
      <a
        href="https://war.ukraine.ua"
        target="_blank"
        className={styles.link}
        rel="noreferrer"
      >
        <WebpPicture
          containerClassName={styles.picture}
          imgClassName={styles.image}
          pathname="/images/"
          filename="support_ukraine"
          alt="Support Ukraine!"
        />
      </a>
    </div>
  );
};

HelpUkraine.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
};

export default HelpUkraine;
