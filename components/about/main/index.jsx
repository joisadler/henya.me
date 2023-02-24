import {
  useRef,
  // useEffect,
} from 'react';
import buttonStyles from 'styles/buttons.module.scss';
import WebpPicture from 'components/common/WebpPicture';
import ScrollDownButton from 'components/common/ScrollDownButton';
// import { useMediaQuery } from 'react-responsive';
// import { desktop_breakpoint } from 'config/constants';
import styles from './main.module.scss';

const Main = () => {
  const cvLinkRef = useRef(null);
  // const pictureRef = useRef(null);
  // const textContentRef = useRef(null);

  const onDownloadCV = () => {
    if (!cvLinkRef.current) return;
    cvLinkRef.current.click();
  };

  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${desktop_breakpoint}px)`,
  // });

  // useEffect(() => {
  //   if (isMobile) return;
  //   const picture = pictureRef.current;
  //   const mainInfoTextContent = textContentRef.current;
  //   if (!picture || !mainInfoTextContent) return;
  //   console.log('picture:', picture);
  //   console.log('mainInfoTextContent:', mainInfoTextContent);
  //   const image = picture.querySelector('img');
  //   const imageNaturalHeight = image.naturalHeight;
  //   const imageNaturalWidth = image.naturalWidth;
  //   const imageAspectRatio = imageNaturalWidth / imageNaturalHeight;
  //   const imageClientWidth = image.clientWidth;
  //   const imageRealHeight = imageClientWidth / imageAspectRatio;
  //   mainInfoTextContent.style.height = `${imageRealHeight}px`;
  // }, []);

  return (
    <main className={styles.container}>
      <section className={styles.main_info}>
        <WebpPicture
          containerClassName={styles.main_info_picture}
          imgClassName={styles.main_info_image}
          pathname="images/about/"
          filename="me"
          alt="Me"
          // ref={pictureRef}
        />
        <div
          className={styles.main_info_text_content}
          // ref={textContentRef}
        >
          <h1 className={styles.page_title}>About Me</h1>
          <h2 className={styles.main_title}>
            Hi, my name is Henya Adler.
            <br />
            I&apos;m <strong>UX/UI</strong> designer.
          </h2>
          <p className={styles.main_description}>
            I&apos;m a graphic and UX/UI designer from Israel. Passionate about
            exceptional product designs that prioritize user experience. I
            possess a diverse skill set that includes designing, animating,
            branding, prototyping, and coding. However, I remain dedicated to
            finding solutions that enhance the appeal and user-friendliness of
            my designs. With four years of experience in branding and printing
            design, I am constantly seeking opportunities to expand my knowledge
            and skill set through self-directed learning.
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
        <ScrollDownButton dark />
      </section>
      <section className={styles.additional_info}>
        <div className={styles.experience}>
          <h2 className={styles.additional_info_section_title}>Experience</h2>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>
              Rom Marketing (2021 - 2022)
            </h3>
            <h4 className={styles.info_item_subtitle}>UX/UI Designer</h4>
            <ul className={styles.info_item_list}>
              <li>Designed wireframes and UI.</li>
              <li>Designed brand identity.</li>
              <li>Created animations and videos.</li>
            </ul>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>Nail Pharm (2017 - 2019)</h3>
            <h4 className={styles.info_item_subtitle}>Graphic Designer</h4>
            <ul className={styles.info_item_list}>
              <li>
                Developed and honed skills in marketing, branding, and other
                areas.
              </li>
              <li>
                Delivered advertising materials: social media, banners, print
                and packaging materials.
              </li>
              <li>
                Worked across different undertakings while overseeing and
                regarding project&apos;s deadlines.
              </li>
            </ul>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>
              Henya Design (2017 - present)
            </h3>
            <h4 className={styles.info_item_subtitle}>
              Freelance Graphic Designer
            </h4>
            <ul className={styles.info_item_list}>
              <li>Created brand identity (logos, flyers, etc.).</li>
              <li>
                Created print materials(calendars, book design, invitations and
                many more).
              </li>
              <li>Created Wordpress websites using Elementor/Gutenberg. </li>
            </ul>
          </article>
        </div>
        <div className={styles.education}>
          <h2 className={styles.additional_info_section_title}>Education</h2>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>
              Netcraft academy (2020 - 2021)
            </h3>
            <h4 className={styles.info_item_subtitle}>UX/UI Design</h4>
            <p className={styles.info_item_text}>
              In this course, I&apos;ve participated in several exercises (both
              visual and non-visual) to apply acquired knowledge, from
              organizing and structuring screen-based content, defining goals
              and strategy, to creating wireframes and visual mockups.
            </p>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>
              Shenkar Handesaim (2016 - 2017)
            </h3>
            <h4 className={styles.info_item_subtitle}>Graphic Design</h4>
            <p className={styles.info_item_text}>
              Through visual examples, I&apos;ve learned fundamental principles
              of graphic design: imagemaking, typography, composition, working
              with color and shape foundational skills that are common in all
              areas of graphic design practice.
            </p>
          </article>
          <article className={styles.info_item}>
            <h3 className={styles.info_item_title}>
              International Institute for Economics and Humanities (2009 - 2014)
            </h3>
            <h4 className={styles.info_item_subtitle}>
              Advertising & Brand Communication (B.A.)
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
