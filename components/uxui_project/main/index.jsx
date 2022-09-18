import { arrayOf, shape, string, oneOfType } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpPicture from 'components/common/WebpPicture';
import WebpAnimation from 'components/common/WebpAnimation';
import useWindowSize from 'hooks/useWindowSize';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const isDesktop = useMediaQuery({
    minWidth: desktop_breakpoint,
  });
  const size = useWindowSize();
  const { width: windowWidth, height: windowHeight } = size;

  const {
    name,
    logo_image_filename,
    preview_animation_filename,
    summary,
    roles,
    team,
    duration,
    tools,
    problem,
    solution,
    main_features,
    fonts,
    color_palette,
    icons,
    button_icons,
    screens,
  } = project;

  const renderLogoPictureSection = () => {
    return (
      <section className={styles.logo_picture_container}>
        {logo_image_filename && logo_image_filename.length > 0 && (
          <WebpPicture
            containerClassName={styles.logo_picture}
            imgClassName={styles.logo_image}
            pathname="/images/portfolio/uxui/"
            filename={logo_image_filename}
            alt={name}
          />
        )}
      </section>
    );
  };

  const renderSummary = () => {
    return summary.map((paragraph) => (
      <p
        className={styles.summary_text}
        key={paragraph
          .split(' ')
          .map((word) => word[0])
          .join('')}
      >
        {paragraph}
      </p>
    ));
  };

  const renderRoles = () => {
    return roles.map((role) => (
      <p className={styles.metadata_text} key={role}>
        {role}
      </p>
    ));
  };

  const renderTeam = () => {
    return team.map((teammate) => (
      <p className={styles.metadata_text} key={teammate}>
        {teammate}
      </p>
    ));
  };

  const renderDuration = () => {
    return duration.map((year) => (
      <p className={styles.metadata_text} key={year}>
        {year}
      </p>
    ));
  };

  const renderTools = () => {
    return tools.map((tool) => (
      <p className={styles.metadata_text} key={tool}>
        {tool}
      </p>
    ));
  };

  const renderMainFeatures = () => {
    return main_features.map((feature) => (
      <li
        className={styles.main_features_item}
        key={feature
          .split(' ')
          .map((word) => word[0])
          .join('')}
      >
        {feature}
      </li>
    ));
  };

  const renderFonts = () => {
    return fonts.map((font) => (
      <article key={font}>
        <h4 className={styles.font_name} style={{ '--font_family': font }}>
          {font}
        </h4>
        <p
          className={styles.font_demonstration}
          style={{ '--font_family': font }}
        >
          ABCDEFGHIJKLMOPQRSTUVWXZ abcdefghijklmnopqrstuvwxyz 1234567890
        </p>
      </article>
    ));
  };

  const renderColorPalette = () => {
    return (
      <div className={styles.color_palette}>
        {color_palette.map((color) => (
          <div
            className={styles.color}
            key={color}
            aria-label={color}
            style={{ '--color': color }}
          />
        ))}
      </div>
    );
  };

  const renderIcons = () => {
    return icons.map((filename) => (
      <WebpPicture
        containerClassName={styles.icon_picture}
        imgClassName={styles.icon_image}
        pathname="/images/portfolio/uxui/"
        filename={filename}
        alt={filename}
        key={filename}
      />
    ));
  };

  const renderButtonIcons = () => {
    return button_icons.map((filename) => (
      <WebpPicture
        containerClassName={styles.button_icon_picture}
        imgClassName={styles.button_icon_image}
        pathname="/images/portfolio/uxui/"
        filename={filename}
        alt={filename}
        key={filename}
      />
    ));
  };

  const renderScreens = () => {
    return screens.map((screen) => {
      const { name: screenName, description, img_filename } = screen;
      return (
        <div key={screenName} className={styles.screen_container}>
          <WebpPicture
            containerClassName={styles.screen_picture}
            imgClassName={styles.screen_image}
            pathname="/images/portfolio/uxui/"
            filename={img_filename}
            alt={screenName}
          />
          <div className={styles.screen_info}>
            <h3 className={styles.screen_name}>{screenName}</h3>
            {description.map((p) => {
              if (Array.isArray(p)) {
                return (
                  <ul key={p}>
                    {p.map((item) => (
                      <li
                        key={item
                          .split(' ')
                          .map((word) => word[0])
                          .join('')}
                        className={styles.screen_description}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={p
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
                  className={styles.screen_description}
                >
                  {p}
                </p>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <main className={styles.container}>
      {renderLogoPictureSection()}
      {!isDesktop && (
        <section className={styles.preview_animation_picture_mobile_container}>
          <WebpAnimation
            containerClassName={styles.preview_animation_picture_mobile}
            imgClassName={styles.preview_animation_image_mobile}
            pathname="/images/portfolio/uxui/"
            filename={preview_animation_filename}
            alt={`${name} preview`}
          />
        </section>
      )}
      <section className={styles.summary_container}>
        <div className={styles.summary}>
          <h2 className={styles.summary_title}>Project Summary:</h2>
          {renderSummary()}
        </div>
        {isDesktop && (
          <WebpAnimation
            containerClassName={styles.preview_animation_picture}
            imgClassName={styles.preview_animation_image}
            pathname="/images/portfolio/uxui/"
            filename={preview_animation_filename}
            alt={`${name} preview`}
          />
        )}
      </section>
      <section className={styles.metadata_container}>
        <div className={styles.metadata}>
          <div className={styles.metadata_item}>
            <h2 className={styles.metadata_title}>Roles</h2>
            {renderRoles()}
          </div>
          <div>
            <div className={styles.metadata_item}>
              <h2 className={styles.metadata_title}>Team</h2>
              {renderTeam()}
            </div>
            <div className={styles.metadata_item}>
              <h2 className={styles.metadata_title}>Duration</h2>
              {renderDuration()}
            </div>
          </div>
          <div className={styles.metadata_item}>
            <h2 className={styles.metadata_title}>Tools</h2>
            {renderTools()}
          </div>
        </div>
      </section>
      <section className={styles.problem_container}>
        <h2 className={styles.problem_title}>
          The&nbsp;<span className={styles.text_red}>Problem</span>
        </h2>
        <p className={styles.problem_text}>{problem}</p>
      </section>
      <section className={styles.solution_container}>
        <h2 className={styles.solution_title}>
          The&nbsp;<span className={styles.text_green}>Solution</span>
        </h2>
        <p className={styles.solution_text}>{solution}</p>
      </section>
      <section className={styles.main_features_container}>
        <h2 className={styles.main_features_title}>The main features are:</h2>
        <ul className={styles.main_features_lish}>{renderMainFeatures()}</ul>
      </section>
      <section className={styles.ui_kit_container}>
        <div className={styles.ui_kit_info}>
          <h2 className={styles.ui_kit_title}>
            <span className={styles.text_red}>UI</span>&nbsp;Kit
          </h2>
          {logo_image_filename && logo_image_filename.length > 0 && (
            <WebpPicture
              containerClassName={styles.ui_kit_logo_picture}
              imgClassName={styles.ui_kit_logo_image}
              pathname="/images/portfolio/uxui/"
              filename={logo_image_filename}
              alt={name}
            />
          )}
          <h3 className={styles.typography_title}>FONTS / TYPOGRAPHY</h3>
          {renderFonts()}
          <h3 className={styles.color_palette_title}>COLOR PALETTE</h3>
          {renderColorPalette()}
        </div>
        <div className={styles.ui_kit_icons}>
          <div className={styles.icons}>{renderIcons()}</div>
          <div className={styles.button_icons}>{renderButtonIcons()}</div>
        </div>
      </section>
      <section className={styles.screens}>{renderScreens()}</section>
      <section className={styles.final_prototype}>
        <h2 className={styles.final_prototype_title}>
          Final&nbsp;<span className={styles.text_red}>Prototype</span>
        </h2>
        <div className={styles.prototype_container}>
          <iframe
            className={styles.prototype}
            title="Final Prototype"
            // frameBorder="0"
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="100%"
            height={isDesktop ? '800px' : ''}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fse7JR93jBnQvSH2pN7JCos%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D15%253A1058%26viewport%3D473%252C346%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D15%253A1058"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
};

Main.propTypes = {
  project: shape({
    name: string.isRequired,
    logo_image_filename: string,
    summary: arrayOf(string).isRequired,
    roles: arrayOf(string).isRequired,
    team: arrayOf(string).isRequired,
    tools: arrayOf(string).isRequired,
    duration: arrayOf(string).isRequired,
    problem: arrayOf(string).isRequired,
    solution: arrayOf(string).isRequired,
    main_features: arrayOf(string).isRequired,
    fonts: arrayOf(string).isRequired,
    color_palette: arrayOf(string).isRequired,
    icons: arrayOf(string).isRequired,
    button_icons: arrayOf(string).isRequired,
    screens: arrayOf(
      shape({
        name: string.isRequired,
        description: arrayOf(oneOfType([string, arrayOf(string)])).isRequired,
        img_filename: string.isRequired,
      })
    ),
  }).isRequired,
};

export default Main;
