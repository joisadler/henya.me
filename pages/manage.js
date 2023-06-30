import { useEffect, useState } from 'react';
import { useFirestore } from 'hooks/useFirestore';
import Head from 'next/head';
import { arrayOf, bool, number, shape, string } from 'prop-types';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import MobileMenu from 'components/common/MobileMenu';
import AuthenticationWarning from 'components/manage/AuthenticationWarning';
import Main from 'components/manage/Main';
import NoPermissionWarning from 'components/manage/NopermissionWarning';
import Sidebar from 'components/manage/Sidebar';

import { useUser } from '../auth/useUser';
import withAuth from '../auth/withAuth';

import styles from '../styles/manage.module.scss';

const Manage = ({ nav_links }) => {
  const { db, getDocuments } = useFirestore();
  const { user, logout } = useUser();

  const [activePanel, setActivePanel] = useState('users');
  const [managerEmails, setManagerEmails] = useState([]);

  useEffect(() => {
    (async () => {
      const emails = [];
      const docs = await getDocuments('users', {
        fieldPath: 'isAdmin',
        opStr: '==',
        value: true,
      }).catch(e => console.log('error:', e));
      docs.forEach(doc => {
        emails.push(doc.data().email);
      });
      setManagerEmails(emails);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  const renderMainComponent = () => {
    if (!user) {
      return (
        <>
          <AuthenticationWarning />;
          <Footer />
        </>
      );
    }

    if (!managerEmails.includes(user?.email)) {
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
