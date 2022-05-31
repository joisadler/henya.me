import React from 'react';
import { arrayOf, shape, string, number, bool } from 'prop-types';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const {
    name,
    tags,
    short_about,
    preview_image_filename,
    logo_image_filename,
    comingSoon,
  } = project;
  return <main className={styles.container}>name</main>;
};

Main.propTypes = {
  project: shape({
    id: number.isRequired,
    name: string.isRequired,
    preview_image_filename: string.isRequired,
    logo_image_filename: string.isRequired,
    tags: arrayOf(string).isRequired,
    short_about: string.isRequired,
    comingSoon: bool.isRequired,
  }).isRequired,
};

export default Main;
