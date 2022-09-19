import { arrayOf, shape, string, oneOfType } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import LogoImage from '../logoImage';
import SummarySection from '../summary_section';
import Metadata from '../metadata';
import Problem from '../problem';
import Solution from '../solution';
import MainFeatures from '../main_features';
import UiKit from '../ui_kit';
import Screens from '../screens';
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

  const shouldRenderFinalPrototype =
    final_prototype && final_prototype.src.length > 0;

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
      <Screens screens={screens} />
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
