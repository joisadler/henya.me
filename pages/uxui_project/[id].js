import { useState, useEffect } from 'react';
import Head from 'next/head';
import { arrayOf, shape, string, number, oneOfType } from 'prop-types';
import { useRouter } from 'next/router';
import GoogleFontLoader from 'react-google-font-loader';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Main from 'components/uxui_project/main';
import Footer from 'components/common/footer';

const Project = ({ nav_links, projectsData }) => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData.find((p) => p.id === Number(id));
  const { fonts } = project;

  const fontsToLoad = fonts.map((fontName) => ({
    font: fontName,
    weights: [400, 700],
  }));

  // Hydration failed error fix
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setShowing(true);
  }, []);
  if (!showing) {
    return null;
  }
  if (typeof window === 'undefined') return <></>;

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler - UX/UI designer" />
      </Head>
      <GoogleFontLoader
        fonts={fontsToLoad}
        subsets={['cyrillic-ext', 'greek']}
      />
      <MobileMenu nav_links={nav_links} />
      <Header nav_links={nav_links} />
      <Main project={project} />
      <Footer />
    </>
  );
};

Project.propTypes = {
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
  projectsData: arrayOf(
    shape({
      name: string.isRequired,
      logo_image_filename: string,
      summary: arrayOf(string),
      roles: arrayOf(string),
      team: arrayOf(string).isRequired,
      tools: arrayOf(string).isRequired,
      duration: arrayOf(string).isRequired,
      problem: arrayOf(string).isRequired,
      solution: arrayOf(string).isRequired,
      main_features: arrayOf(string).isRequired,
      fonts: arrayOf(string).isRequired,
      color_palette: arrayOf(string).isRequired,
      icons: arrayOf(string).isRequired,
      button_icons: arrayOf(string).isRequired,
      screens: arrayOf(
        shape({
          name: string.isRequired,
          description: arrayOf(oneOfType([string, arrayOf(string)])).isRequired,
          img_filename: string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export async function getStaticPaths() {
  const projects = require('data/uxui_projects.data');

  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const nav_links = require('data/nav_links.data.json');
  const projectsData = require('data/uxui_projects.data');

  return {
    props: {
      nav_links,
      projectsData,
    },
  };
}

export default Project;
