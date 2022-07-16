import React, { useRef, useEffect } from 'react';
import buttonStyles from 'styles/buttons.module.scss';
import WebpPicture from 'components/common/WebpPicture';
import { useMediaQuery } from 'react-responsive';
import { desktop_breakpoint } from 'config/constants';
import styles from './main.module.scss';

const Main = () => {
  const cvLinkRef = useRef(null);
  const pictureRef = useRef(null);
  const textContentRef = useRef(null);

  const onDownloadCV = () => {
    if (!cvLinkRef.current) return;
    cvLinkRef.current.click();
  };

  const isMobile = useMediaQuery({
    query: `(max-width: ${desktop_breakpoint}px)`,
  });

  useEffect(() => {
    if (isMobile) return;
    const picture = pictureRef.current;
    const mainInfoTextContent = textContentRef.current;
    if (!picture || !mainInfoTextContent) return;
    const image = picture.querySelector('img');
    const imageNaturalHeight = image.naturalHeight;
    const imageNaturalWidth = image.naturalWidth;
    const imageAspectRatio = imageNaturalWidth / imageNaturalHeight;
    const imageClientWidth = image.clientWidth;
    const imageRealHeight = imageClientWidth / imageAspectRatio;
    mainInfoTextContent.style.height = `${imageRealHeight}px`;
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.main_info}>
        <WebpPicture
          containerClassName={styles.main_info_picture}
          imgClassName={styles.main_info_image}
          pathname="images/about/"
          filename="me"
          alt="Me"
          ref={pictureRef}
        />
        <div className={styles.main_info_text_content} ref={textContentRef}>
          <h1 className={styles.page_title}>About Me</h1>
          <h2 className={styles.main_title}>
            Hi, my name is Henya Adler.
            <br />
            I&apos;m <strong>UX/UI</strong> designer.
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
      <section className={styles.additional_info}>
        <div className={styles.experience}>
          <h2 className={styles.additional_info_section_title}>
            My experience
          </h2>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>Rom Marketing</h3>
            <h4 className={styles.info_item_subtitle}>UX/UI Designer</h4>
            <ul className={styles.info_item_list}>
              <li>Designed all wireframes and UI.</li>
              <li>Designed brand identity.</li>
            </ul>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>Nail Pharm</h3>
            <h4 className={styles.info_item_subtitle}>Graphic Designer</h4>
            <ul className={styles.info_item_list}>
              <li>
                Created and gained solid abilities in marking, branding and many
                more.
              </li>
              <li>
                Delivering advertising materials - social media, invitations,
                banners, calendars, print and packaging materials.
              </li>
              <li>
                Working across different undertakings while overseeing and
                regarding project&apos;s deadlines.
              </li>
            </ul>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>Henya Design</h3>
            <h4 className={styles.info_item_subtitle}>
              Freelance Graphic Designer
            </h4>
            <ul className={styles.info_item_list}>
              <li>Creating brand identity (logos, flyers, etc.).</li>
              <li>
                Creating print materials(calendars, book design, invitations and
                many more).
              </li>
              <li>Creating websites in Wordpress via Elementor/Gutenberg.</li>
            </ul>
          </article>
        </div>
        <div className={styles.education}>
          <h2 className={styles.additional_info_section_title}>My education</h2>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>Netcraft Academy</h3>
            <h4 className={styles.info_item_subtitle}>UX/UI Design</h4>
            <p className={styles.info_item_text}>
              I had participated in several exercises — both visual and
              non-visual — where I applied acquired knowledge, from organizing
              and structuring screen-based content, defining goals and strategy,
              to creating wireframes and visual mockups.
            </p>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>Shenkar Handesaim</h3>
            <h4 className={styles.info_item_subtitle}>Graphic Design</h4>
            <p className={styles.info_item_text}>
              I had learned a rich variety of courses that gave me a
              comprehensive overview of the field of graphic design and
              printing. I had completed my studies with a portfolio and a
              Shenkar College certificate.
            </p>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>
              International Institute for Economics and Humanities
            </h3>
            <h4 className={styles.info_item_subtitle}>
              B.A. in Advertising and Public Relations
            </h4>
            <p className={styles.info_item_text}>
              We were trained to design formal and aesthetic aspects in written,
              graphic, audiovisual and digital media, as well as the use of
              computer techniques for the representation and transmission of
              facts and data through infographic systems and photographic
              techniques.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;
