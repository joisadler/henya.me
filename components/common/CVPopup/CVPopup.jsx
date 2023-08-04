import { useContext } from 'react';
import Context from 'context/Context';

import Modal from 'components/common/Modal';

import styles from './cv_popup.module.scss';
import buttonStyles from 'styles/buttons.module.scss';

const CVPopup = () => {
  const { isCVPopupOpen, hideCVPopup } = useContext(Context);

  return (
    <Modal
      className={styles.container}
      overlayClassName={styles.overlay}
      isOpen={isCVPopupOpen}
      onRequestClose={hideCVPopup}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>Download CV</h2>
        <div className={styles.buttons}>
          <a
            href="/download/Henya_Adler_CV_English.pdf"
            className={buttonStyles.action_button}
            download
          >
            English
          </a>
          <a
            href="/download/Henya_Adler_CV_Hebrew.pdf"
            className={buttonStyles.action_button}
            download
          >
            Hebrew
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default CVPopup;
