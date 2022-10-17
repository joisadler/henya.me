import { arrayOf, shape, string, oneOfType } from 'prop-types';
import LogoImage from '../logoImage';
import SummarySection from '../summary_section';
import Metadata from '../metadata';
import Persons from '../persons';
import Problem from '../problem';
import Solution from '../solution';
import MainFeatures from '../main_features';
import UiKit from '../ui_kit';
import Screens from '../screens';
import FinalPrototype from '../final_prototype';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const {
    name,
    short_about,
    logo_image_filename,
    preview_animation_filename,
    summary,
    roles,
    team,
    duration,
    tools,
    persons,
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

  return (
    <main className={styles.container}>
      <LogoImage
        logo_image_filename={logo_image_filename}
        name={name}
        short_about={short_about}
      />
      <SummarySection
        summary={summary}
        name={name}
        preview_animation_filename={preview_animation_filename}
      />
      <Metadata roles={roles} team={team} duration={duration} tools={tools} />
      <Persons persons={persons} />
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
      <FinalPrototype final_prototype={final_prototype} />
    </main>
  );
};

Main.propTypes = {
  project: shape({
    name: string.isRequired,
    short_about: string.isRequired,
    preview_animation_filename: string,
    logo_image_filename: string,
    summary: arrayOf(string),
    roles: arrayOf(string),
    team: arrayOf(string),
    duration: arrayOf(string),
    tools: arrayOf(string),
    persons: arrayOf(
      shape({
        image_filename: string,
        name: string,
        position: string,
        age: string,
        education: string,
        family: string,
        hometown: string,
        about: arrayOf(string),
        goals: arrayOf(string),
        quote: string,
        painPoints: arrayOf(string),
      })
    ),
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
