import Head from 'next/head';
import { arrayOf, shape, number } from 'prop-types';
import Image from 'next/image';
import commonStyles from '../styles/common.module.scss';
import styles from '../styles/home.module.scss';

const Home = ({ projects }) => {
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>Henya Adler</title>
      </Head>

      <main className={styles.container}>hi</main>
    </div>
  );
};

Home.propTypes = {
  projects: arrayOf(
    shape({
      id: number,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const projects = require('data/projects.json');

  return {
    props: {
      projects,
    },
  };
}

export default Home;
