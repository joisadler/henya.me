import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { arrayOf, bool, number, shape, string } from 'prop-types';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HelpUkraine from 'components/common/HelpUkraine';
import MobileMenu from 'components/common/MobileMenu';
import Graphic from 'components/home/Graphic';
import Main from '@/components/home/Main';
import Motion from '@/components/home/Motion';
import UxUi from 'components/home/UxUi';

const Home = ({
  uxui_projects,
  graphic_design_projects,
  motion_design_projects,
  nav_links,
}) => {
  const router = useRouter();
  const pressCountRef = useRef(0);

  const [isHelpUkraineShown, setIsHelpUkraineShown] = useState(true);

  const closeHelpUkraine = () => {
    setIsHelpUkraineShown(false);
  };

  const mmmEasterEgg = e => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <UxUi projects={uxui_projects} />
      <Motion projects={motion_design_projects} />
      <Graphic projects={graphic_design_projects} />
      <Footer />
      <HelpUkraine isOpen={isHelpUkraineShown} onClose={closeHelpUkraine} />
    </>
  );
};

Home.propTypes = {
  uxui_projects: arrayOf(
    shape({
      id: number.isRequired,
      preview_image_filename: string.isRequired,
      name: string.isRequired,
      short_about: string.isRequired,
      comingSoon: bool.isRequired,
    })
  ).isRequired,
  graphic_design_projects: arrayOf(
    shape({
      id: number.isRequired,
      image_filename: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
  motion_design_projects: arrayOf(
    shape({
      id: number.isRequired,
      media_filename: string.isRequired,
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
};

export async function getStaticProps() {
  const uxui_projects = require('data/uxui_projects.data');
  const graphic_design_projects = require('data/graphic_design_projects.data');
  const motion_design_projects = require('data/motion_design_projects.data');
  const nav_links = require('data/nav_links.data.json');

  return {
    props: {
      uxui_projects,
      graphic_design_projects,
      motion_design_projects,
      nav_links,
    },
  };
}

export default Home;
