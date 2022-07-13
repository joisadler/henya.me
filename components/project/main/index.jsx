import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const { name, logo_image_filename, summary, roles, team, tools, duration } =
    project;

  return (
    <main className={styles.container}>
      <picture className={styles.logo_picture}>
        <source
          srcSet={`/images/portfolio/uxui/${logo_image_filename}.webp`}
          type="image/webp"
        />
        <source
          srcSet={`/images/portfolio/uxui/${logo_image_filename}.png`}
          type="image/png"
        />
        <img
          className={styles.logo_image}
          src={`/images/portfolio/uxui/${logo_image_filename}.png`}
          alt={name}
        />
      </picture>
    </main>
  );
};

Main.propTypes = {
  project: shape({
    name: string.isRequired,
    logo_image_filename: string.isRequired,
    summary: arrayOf(string).isRequired,
    roles: arrayOf(string).isRequired,
    team: arrayOf(string).isRequired,
    tools: arrayOf(string).isRequired,
    duration: arrayOf(string).isRequired,
  }).isRequired,
};

export default Main;
