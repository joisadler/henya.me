import { useState, useEffect } from 'react';
import { shape, string, bool } from 'prop-types';
import { useFirestore } from 'hooks/useFirestore';
import styles from './users.module.scss';

const UsersItem = ({ user }) => {
  console.log('user:', user);
  const { displayName, email, isAdmin } = user;
  const isHenya = email === process.env.NEXT_PUBLIC_EMAIL;

  const onDeleteUser = () => {};

  return (
    <tr>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>
        <input
          type="checkbox"
          checked={isAdmin}
          disabled={isHenya}
          aria-label={`mark ${displayName} as admin`}
        />
      </td>
      <td>
        {!isHenya && (
          <button type="button" onClick={onDeleteUser}>
            delete
          </button>
        )}
      </td>
    </tr>
  );
};

const Users = () => {
  const { db, getAllDocuments } = useFirestore();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const usersArr = [];
      const docs = await getAllDocuments('users');
      docs.forEach((doc) => {
        console.log('doc data:', doc.data());
      });
      docs.forEach((doc) => {
        usersArr.push(doc.data());
      });
      setUsers(
        usersArr.sort((a) =>
          a.email === process.env.NEXT_PUBLIC_EMAIL ? -1 : 1
        )
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  return (
    <div className={styles.container}>
      <h1 className={styles.page_title}>
        Manage <strong>Users</strong>
      </h1>
      <table className={styles.users_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Is admin</th>
            <th>Delete user</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UsersItem user={user} key={user.email} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

UsersItem.propTypes = {
  user: shape({
    displayName: string,
    email: string,
    isAdmin: bool,
  }).isRequired,
};

export default Users;
