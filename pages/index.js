import Head from 'next/head';
import { arrayOf, shape, string, number } from 'prop-types';
import Main from 'components/home/main';
import Header from 'components/common/header';
import commonStyles from '../styles/common.module.scss';

const Home = ({ projects, nav_links }) => {
  return (
    <div className={commonStyles.page_container}>
      <Head>
        <title>Henya Adler</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler - UX/UI designer" />
      </Head>
      <Header nav_links={nav_links} />
      <Main />
    </div>
  );
};

Home.propTypes = {
  projects: arrayOf(
    shape({
      id: number,
    })
  ).isRequired,
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const projects = require('data/projects.json');
  const nav_links = require('data/nav_links.json');

  return {
    props: {
      projects,
      nav_links,
    },
  };
}

export default Home;
