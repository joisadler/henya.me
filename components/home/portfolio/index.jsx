import React from 'react';
import dynamic from 'next/dynamic';
import { arrayOf, shape, number, string, bool } from 'prop-types';
import styles from './portfolio.module.scss';

const ProjectPreview = dynamic(
  () => {
    return import('./ProjectPreview');
  },
  { ssr: false }
);

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className={styles.container}>
      <h2 className={styles.section_title}>UX/UI Design</h2>
      <ul className={styles.projects_list}>
        {projects.map((project) => {
          const { id } = project;
          return <ProjectPreview key={id} {...project} />;
        })}
      </ul>
    </section>
  );
};

Portfolio.propTypes = {
  projects: arrayOf(
    shape({
      id: number.isRequired,
      preview_image: string.isRequired,
      name: string.isRequired,
      tags: arrayOf(string).isRequired,
      about: string.isRequired,
      comingSoon: bool.isRequired,
    })
  ).isRequired,
};

export default Portfolio;
