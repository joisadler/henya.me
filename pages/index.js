import Head from 'next/head';
import { arrayOf, shape, string, number, bool } from 'prop-types';
import Header from 'components/common/header';
import Main from 'components/home/main';
import MobileMenu from 'components/common/mobile_menu';
import Services from 'components/home/services';
import Portfolio from 'components/home/portfolio';

const Home = ({ projects, nav_links, services }) => {
  return (
    <>
      <Head>
        <title>Henya Adler</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler - UX/UI designer" />
      </Head>
      <MobileMenu nav_links={nav_links} />
      <Header nav_links={nav_links} />
      <Main services={services} />
      <Services services={services} />
      <Portfolio projects={projects} />
    </>
  );
};

Home.propTypes = {
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
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
  services: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      img_src: string.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const projects = require('data/projects.data');
  const nav_links = require('data/nav_links.data.json');
  const services = require('data/services.data.json');

  return {
    props: {
      projects,
      nav_links,
      services,
    },
  };
}

export default Home;
