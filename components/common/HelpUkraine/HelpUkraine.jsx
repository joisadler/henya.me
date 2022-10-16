import { bool, func } from 'prop-types';
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
        <span className={styles.top}>SUPPORT</span>
        <span className={styles.bottom}>UKRAINE</span>
      </a>
    </div>
  );
};

HelpUkraine.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
};

export default HelpUkraine;
