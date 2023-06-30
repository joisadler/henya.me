import Head from 'next/head';
import { arrayOf, bool, number, shape, string } from 'prop-types';

import Footer from 'components/common/footer';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Main from 'components/signin/main/';

const Signin = ({ nav_links }) => {
  return (
    <>
      <Head>
        <title>Henya Adler | Manage Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler | Manage Website" />
      </Head>
      <MobileMenu nav_links={nav_links} />
      <Header nav_links={nav_links} />
      <Main />
      <Footer />
    </>
  );
};

export default Signin;

Signin.propTypes = {
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
  const nav_links = require('data/nav_links.data.json');

  return {
    props: {
      nav_links,
    },
  };
}
