import dynamic from 'next/dynamic';
import { arrayOf, shape, number, string, bool } from 'prop-types';
import styles from './uxui.module.scss';

const ProjectPreview = dynamic(
  () => {
    return import('./ProjectPreview');
  },
  { ssr: false }
);

const UxUi = ({ projects }) => {
  return (
    <section id="uxui" className={styles.container}>
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

UxUi.propTypes = {
  projects: arrayOf(
    shape({
      id: number.isRequired,
      preview_image_filename: string.isRequired,
      name: string.isRequired,
      short_about: string.isRequired,
      comingSoon: bool.isRequired,
    })
  ).isRequired,
};

export default UxUi;
