import { useState } from 'react';
import { arrayOf, shape, string, number, bool } from 'prop-types';
import Head from 'next/head';
import AuthenticationWarning from 'components/manage/authenticationWarning';
import NoPermissionWarning from 'components/manage/nopermissionWarning';
import Header from 'components/common/header';
import MobileMenu from 'components/common/mobile_menu';
import Sidebar from 'components/manage/sidebar';
import Main from 'components/manage/main';
import Footer from 'components/common/footer';
import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';
import styles from '../styles/manage.module.scss';

const Manage = ({ nav_links }) => {
  const { user, logout } = useUser();

  const [activePanel, setActivePanel] = useState('users');

  const renderMainComponent = () => {
    if (!user) {
      return (
        <>
          <AuthenticationWarning />;
          <Footer />
        </>
      );
    }

    if (user?.email !== process.env.NEXT_PUBLIC_EMAIL) {
      return (
        <>
          <NoPermissionWarning user={user} logout={logout} />
          <Footer />
        </>
      );
    }

    return (
      <div className={styles.container}>
        <Sidebar
          user={user}
          logout={logout}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
        <Main activePanel={activePanel} />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Henya Adler | Manage Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Henya Adler | Manage Website" />
      </Head>
      <MobileMenu nav_links={nav_links} />
      <Header nav_links={nav_links} />
      {renderMainComponent()}
    </>
  );
};

Manage.propTypes = {
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

export default withAuth(Manage);
