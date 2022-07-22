import { useEffect } from 'react';
import { useFirestore } from 'hooks/useFirestore';
import styles from './main.module.scss';

const Main = ({ user, logout }) => {
  const { email } = user;

  const { getDocuments } = useFirestore();
  console.log('getDocuments:', getDocuments);

  useEffect(() => {
    (async () => {
      const docs = await getDocuments('users', {
        fieldPath: 'isAdmin',
        opStr: '==',
        value: true,
      });
      docs.forEach((doc) => {
        console.log('doc data:', doc.data());
      });
    })();
  });

  return (
    <main className={styles.container}>
      <div>Manage</div>
      <div>
        <div>Email: {email}</div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </main>
  );
};

export default Main;
