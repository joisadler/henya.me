import { useContext } from 'react';
import Typed from 'react-typed';
import Context from 'context/Context';

// import WebpPicture from 'components/common/WebpPicture';
// import WebpAnimation from 'components/common/WebpAnimation';
import ScrollDownButton from 'components/common/ScrollDownButton';

import ToolIcons from './ToolIcons';

import styles from './main.module.scss';
import buttonStyles from 'styles/buttons.module.scss';

const Main = () => {
  const texts = ['UX/UI Designer', 'Graphic Designer', 'Motion Designer'];
  const { isCVPopupOpen, showCVPopup } = useContext(Context);

  const onDownloadCV = () => {
    if (isCVPopupOpen) {
      return;
    }
    showCVPopup();
  };

  return (
    <section className={styles.container} id="home">
      <div className={styles.main_content}>
        <div className={styles.text_content}>
          <h1 className={styles.heading}>
            <span>
              Hello, my name is
              <br className="desktop_hidden" /> Henya Adler
            </span>
            <span>
              I&apos;m&nbsp;a&nbsp;
              <br className="desktop_hidden" />
              <Typed
                className={styles.typed}
                strings={texts}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1000}
                loop
              />
            </span>
          </h1>
          <button className={buttonStyles.action_button} onClick={onDownloadCV}>
            Download CV
          </button>
        </div>
        <ToolIcons />
        {/* <WebpAnimation
          containerClassName={styles.image_container}
          imgClassName={styles.image}
          pathname="images/"
          filename="preview"
          alt="Projects Preview"
        /> */}
      </div>

      <ScrollDownButton />
    </section>
  );
};

export default Main;
