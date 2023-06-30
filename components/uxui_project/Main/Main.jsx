import {
  arrayOf,
  number,
  objectOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import FinalPrototype from '../FinalPrototype';
import LogoImage from '../LogoImage';
import MainFeatures from '../MainFeatures';
import Metadata from '../Metadata';
import Persons from '../Persons';
import Problem from '../Problem';
import Screens from '../Screens';
import Solution from '../Solution';
import SummarySection from '../SummarySection';
import UiKit from '../UiKit';
import UserFlow from '../UserFlow';
import Wireframes from '../Wireframes';

import styles from './main.module.scss';

const Main = ({ project }) => {
  const {
    device_type,
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
    wireframes,
    user_flow,
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
        device_type={device_type}
      />
      <SummarySection
        summary={summary}
        name={name}
        preview_animation_filename={preview_animation_filename}
        device_type={device_type}
      />
      <Metadata
        roles={roles}
        team={team}
        duration={duration}
        tools={tools}
        device_type={device_type}
      />
      <Persons persons={persons} />
      <Problem problem={problem} />
      <Solution solution={solution} />
      <MainFeatures main_features={main_features} />
      <Wireframes wireframes={wireframes} />
      <UserFlow user_flow={user_flow} />
      <UiKit
        name={name}
        logo_image_filename={logo_image_filename}
        fonts={fonts}
        icons={icons}
        button_icons={button_icons}
        color_palette={color_palette}
      />
      <Screens screens={screens} device_type={device_type} />
      <FinalPrototype final_prototype={final_prototype} />
    </main>
  );
};

Main.propTypes = {
  project: shape({
    device_type: string,
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
    wireframes: arrayOf(string),
    user_flow: arrayOf(string),
    fonts: arrayOf(string),
    color_palette: arrayOf(string),
    icons: shape({
      container_styles: objectOf(oneOfType([string, number])),
      icon_picture_common_styles: objectOf(oneOfType([string, number])),
      icon_image_common_styles: objectOf(oneOfType([string, number])),
      icons: arrayOf(
        shape({
          filename: string,
          icon_picture_styles: objectOf(oneOfType([string, number])),
          icon_image_styles: objectOf(oneOfType([string, number])),
        })
      ),
    }),
    button_icons: shape({
      container_styles: objectOf(oneOfType([string, number])),
      icon_picture_common_styles: objectOf(oneOfType([string, number])),
      icon_image_common_styles: objectOf(oneOfType([string, number])),
      icons: arrayOf(
        shape({
          filename: string,
          icon_picture_styles: objectOf(oneOfType([string, number])),
          icon_image_styles: objectOf(oneOfType([string, number])),
        })
      ),
    }),
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
