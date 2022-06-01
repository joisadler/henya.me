import React from 'react';
import { arrayOf, shape, string, number, bool } from 'prop-types';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const { name, tags, short_about, logo_image_filename, comingSoon } = project;

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
    id: number.isRequired,
    name: string.isRequired,
    logo_image_filename: string.isRequired,
    tags: arrayOf(string).isRequired,
    short_about: string.isRequired,
    comingSoon: bool.isRequired,
  }).isRequired,
};

export default Main;
