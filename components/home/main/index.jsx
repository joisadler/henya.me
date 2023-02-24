import { useRef } from 'react';
import Typed from 'react-typed';
// import WebpPicture from 'components/common/WebpPicture';
import WebpAnimation from 'components/common/WebpAnimation';
import ScrollDownButton from 'components/common/ScrollDownButton';
import buttonStyles from 'styles/buttons.module.scss';
import styles from './main.module.scss';

const Main = () => {
  const texts = ['UX/UI Designer', 'Graphic Designer', 'Motion Designer'];
  const cvLinkRef = useRef(null);

  const onDownloadCV = () => {
    if (!cvLinkRef.current) return;
    cvLinkRef.current.click();
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
          <a
            href="/download/Henya_Adler_CV.pdf"
            className="hidden"
            target="_blank"
            rel="noopener"
            ref={cvLinkRef}
          >
            Download Resume
          </a>
          <button className={buttonStyles.action_button} onClick={onDownloadCV}>
            Download Resume
          </button>
        </div>
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
