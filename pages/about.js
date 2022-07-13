import Head from 'next/head';
import { arrayOf, shape, string, number } from 'prop-types';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Main from 'components/about/main';
import Footer from 'components/common/footer';

const Home = ({ nav_links }) => {
  return (
    <>
      <Head>
        <title>Henya Adler | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler - UX/UI designer" />
      </Head>
      <MobileMenu nav_links={nav_links} />
      <Header nav_links={nav_links} />
      <Main />
      <Footer />
    </>
  );
};

Home.propTypes = {
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const nav_links = require('data/nav_links.data.json');

  return {
    props: {
      nav_links,
    },
  };
}

export default Home;
