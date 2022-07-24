import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { arrayOf, shape, string, number, bool } from 'prop-types';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Main from 'components/home/main';
// import Services from 'components/home/services';
import UxUi from 'components/home/UxUi';
import Graphic from 'components/home/graphic';
import Footer from 'components/common/footer';

const Home = ({
  uxui_projects,
  graphic_design_projects,
  nav_links,
  // services,
}) => {
  const router = useRouter();
  const pressCountRef = useRef(0);

  const mmmEasterEgg = (e) => {
    if (e.key === 'm') {
      pressCountRef.current++;
      if (pressCountRef.current === 3) {
        console.log('\n');
        pressCountRef.current = 0;
        router.push('/manage');
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener('keyup', mmmEasterEgg);
    return () => document.body.removeEventListener('keyup', mmmEasterEgg);
  }, []);

  return (
    <>
      <Head>
        <title>Henya Adler</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler - UX/UI designer" />
      </Head>
      <MobileMenu nav_links={nav_links} />
      <Header nav_links={nav_links} transparent />
      <Main />
      {/* <Services services={services} /> */}
      <UxUi projects={uxui_projects} />
      <Graphic projects={graphic_design_projects} />
      <Footer />
    </>
  );
};

Home.propTypes = {
  uxui_projects: arrayOf(
    shape({
      id: number.isRequired,
      preview_image_filename: string.isRequired,
      name: string.isRequired,
      tags: arrayOf(string).isRequired,
      short_about: string.isRequired,
      comingSoon: bool.isRequired,
    })
  ).isRequired,
  graphic_design_projects: arrayOf(
    shape({
      id: number.isRequired,
      preview_image_filename: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
      scroll: bool.isRequired,
      open_in_new_tab: bool.isRequired,
    })
  ).isRequired,
  // services: arrayOf(
  //   shape({
  //     id: number.isRequired,
  //     title: string.isRequired,
  //     description: string.isRequired,
  //     pathname: string.isRequired,
  //     filename: string.isRequired,
  //   })
  // ).isRequired,
};

export async function getStaticProps() {
  const uxui_projects = require('data/uxui_projects.data');
  const graphic_design_projects = require('data/graphic_design_projects.data');
  const nav_links = require('data/nav_links.data.json');
  const services = require('data/services.data.json');

  return {
    props: {
      uxui_projects,
      graphic_design_projects,
      nav_links,
      services,
    },
  };
}

export default Home;
