import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { arrayOf, shape, string, number } from 'prop-types';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Main from 'components/about/main';
import Footer from 'components/common/footer';

const Home = ({ nav_links }) => {
  const router = useRouter();
  const pressCountRef = useRef(0);

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
