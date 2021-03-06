import Head from 'next/head';
import { arrayOf, shape, string, number } from 'prop-types';
import { useRouter } from 'next/router';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Main from 'components/project/main';
import Footer from 'components/common/footer';

const Project = ({ nav_links, projectsData }) => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData.find((p) => p.id === Number(id));

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler - UX/UI designer" />
      </Head>
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
      logo_image_filename: string.isRequired,
      summary: arrayOf(string).isRequired,
      roles: arrayOf(string).isRequired,
      team: arrayOf(string).isRequired,
      tools: arrayOf(string).isRequired,
      duration: arrayOf(string).isRequired,
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
