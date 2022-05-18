// import Image from 'next/image';
import { useRef } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Typed from 'react-typed';
import buttonStyles from 'styles/buttons.module.scss';
import Services from '../services/Services';
import styles from './main.module.scss';

const Main = ({ services }) => {
  const texts = ['UX/UI Designer', 'Graphic Designer', 'Motion Designer'];
  const cvLinkRef = useRef(null);

  const onDownloadCV = () => {
    if (!cvLinkRef.current) return;
    cvLinkRef.current.click();
  };

  return (
    <section className={styles.container}>
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
        <div className={styles.image_container}>
          <img
            src="images/preview.gif"
            alt="Projects preview"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  services: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      img_src: string.isRequired,
    })
  ).isRequired,
};

export default Main;
