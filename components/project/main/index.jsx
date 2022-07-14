import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const { name, logo_image_filename, summary, roles, team, tools, duration } =
    project;

  return (
    <main className={styles.container}>
      <WebpPicture
        containerClassName={styles.logo_picture}
        imgClassName={styles.logo_image}
        pathname="/images/portfolio/uxui/"
        filename={logo_image_filename}
        alt={name}
      />
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
