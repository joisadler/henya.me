import { useState, useEffect } from 'react';
import { shape, string, bool } from 'prop-types';
import { useFirestore } from 'hooks/useFirestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './users.module.scss';

const UsersItem = ({ user }) => {
  const { displayName, email, isAdmin } = user;
  const isHenya = email === process.env.NEXT_PUBLIC_EMAIL;

  const onDeleteUser = () => {};

  const onToggleAdminCheckbox = ({ currentTarget }) => {
    console.log(currentTarget);
  };

  return (
    <tr>
      <td>{displayName}</td>
      <td>{email}</td>
      <td className={styles.centered}>
        <input
          type="checkbox"
          defaultChecked={isAdmin}
          disabled={isHenya}
          aria-label={`mark ${displayName} as admin`}
          onClick={onToggleAdminCheckbox}
        />
      </td>
      <td className={styles.centered}>
        {!isHenya && (
          <button
            className={styles.delete_user_button}
            type="button"
            onClick={onDeleteUser}
          >
            <FontAwesomeIcon icon="fa-trash" />
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
