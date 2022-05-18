import React from 'react';
import dynamic from 'next/dynamic';
import styles from './portfolio.module.scss';
import projects from './projects.data';

const ProjectPreview = dynamic(
  () => {
    return import('./ProjectPreview');
  },
  { ssr: false }
);

const Portfolio = () => {
  return (
    <section id="portolio" className={styles.container}>
      <ul className={styles.projects_list}>
        {projects.map((project) => {
          const { id } = project;
          return <ProjectPreview key={id} {...project} />;
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
