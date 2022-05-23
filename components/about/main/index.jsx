import React, { useRef } from 'react';
import buttonStyles from 'styles/buttons.module.scss';
import styles from './main.module.scss';

const Main = () => {
  const cvLinkRef = useRef(null);

  const onDownloadCV = () => {
    if (!cvLinkRef.current) return;
    cvLinkRef.current.click();
  };

  return (
    <main className={styles.container}>
      <section className={styles.main_info}>
        <picture className={styles.main_info_picture}>
          <source srcSet="images/about/me.webp" type="image/webp" />
          <source srcSet="images/about/me.png" type="image/png" />
          <img
            className={styles.main_info_image}
            src="images/about/me.webp"
            alt="Me"
          />
        </picture>
        <div className={styles.main_info_text_content}>
          <h1 className={styles.page_title}>About me</h1>
          <h2 className={styles.main_title}>
            Hi, I am open to <strong>work.</strong>
          </h2>
          <p className={styles.main_description}>
            I&apos;m a graphic and UX/UI designer from Israel. Passionate about
            product design and user experience. Skilled at designing, animating,
            branding, prototyping, and coding, yet continuously looking for the
            solution to how might I make the design more likable and more
            user-friendly. I have 4 years of experience in branding and printing
            design. I&apos;m a self-learner and always trying to learn something
            new.
          </p>
          <a
            href="/download/Henya_Adler_CV.pdf"
            className="hidden"
            target="_blank"
            rel="noopener"
            ref={cvLinkRef}
          >
            Download Resume
          </a>
          <button
            className={`${buttonStyles.action_button} ${styles.download_cv_button}`}
            onClick={onDownloadCV}
          >
            Download Resume
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
