// import { useEffect } from 'react';
// import { useFirestore } from 'hooks/useFirestore';
import styles from './users.module.scss';

const Users = () => {
  // const { getDocuments } = useFirestore();

  // useEffect(() => {
  //   (async () => {
  //     const docs = await getDocuments('users', {
  //       fieldPath: 'isAdmin',
  //       opStr: '==',
  //       value: true,
  //     });
  //     docs.forEach((doc) => {
  //       console.log('doc data:', doc.data());
  //     });
  //   })();
  // });
  return (
    <div className={styles.container}>
      <h1 className={styles.page_title}>
        Manage <strong>Users</strong>
      </h1>
    </div>
  );
};

export default Users;
