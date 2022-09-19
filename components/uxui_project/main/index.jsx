import { arrayOf, shape, string, oneOfType } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpPicture from 'components/common/WebpPicture';
import LogoImage from '../logoImage';
import SummarySection from '../summary_section';
import Metadata from '../metadata';
import Problem from '../problem';
import Solution from '../solution';
import MainFeatures from '../main_features';
import UiKit from '../ui_kit';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const isDesktop = useMediaQuery({
    minWidth: desktop_breakpoint,
  });

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
    final_prototype,
  } = project;

  const shouldRenderScreens = screens && screens.length > 0;
  const shouldRenderFinalPrototype =
    final_prototype && final_prototype.src.length > 0;

  const renderScreensSection = () => {
    if (!shouldRenderScreens) return null;
    return (
      <section className={styles.screens}>
        {screens.map((screen) => {
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
        })}
      </section>
    );
  };

  const renderFinalPrototypeSection = () => {
    const { src } = final_prototype;
    if (!shouldRenderFinalPrototype) return null;
    return (
      <section className={styles.final_prototype}>
        <h2 className={styles.final_prototype_title}>
          Final&nbsp;<span className={styles.text_red}>Prototype</span>
        </h2>
        <div className={styles.prototype_container}>
          <iframe
            className={styles.prototype}
            title="Final Prototype"
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="100%"
            height={isDesktop ? '800px' : ''}
            src={src}
            allowFullScreen
          />
        </div>
      </section>
    );
  };

  return (
    <main className={styles.container}>
      <LogoImage logo_image_filename={logo_image_filename} name={name} />
      <SummarySection
        summary={summary}
        name={name}
        preview_animation_filename={preview_animation_filename}
      />
      <Metadata roles={roles} team={team} duration={duration} tools={tools} />
      <Problem problem={problem} />
      <Solution solution={solution} />
      <MainFeatures main_features={main_features} />
      <UiKit
        name={name}
        logo_image_filename={logo_image_filename}
        fonts={fonts}
        icons={icons}
        button_icons={button_icons}
        color_palette={color_palette}
      />
      {renderScreensSection()}
      {renderFinalPrototypeSection()}
    </main>
  );
};

Main.propTypes = {
  project: shape({
    name: string.isRequired,
    preview_animation_filename: string,
    logo_image_filename: string,
    summary: arrayOf(string),
    roles: arrayOf(string),
    team: arrayOf(string),
    duration: arrayOf(string),
    tools: arrayOf(string),
    problem: arrayOf(string),
    solution: arrayOf(string),
    main_features: arrayOf(string),
    fonts: arrayOf(string),
    color_palette: arrayOf(string),
    icons: arrayOf(string),
    button_icons: arrayOf(string),
    screens: arrayOf(
      shape({
        name: string.isRequired,
        description: arrayOf(oneOfType([string, arrayOf(string)])).isRequired,
        img_filename: string.isRequired,
      })
    ),
    final_prototype: shape({
      src: string,
      device_type: string,
    }),
  }).isRequired,
};

export default Main;
