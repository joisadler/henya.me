import { useState, useEffect } from 'react';
import { arrayOf, shape, string, bool } from 'prop-types';
import { useFirestore } from 'hooks/useFirestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './users.module.scss';

const UsersItem = ({ user, users }) => {
  const { updateDocument, deleteDocument } = useFirestore();
  const { displayName, email, isAdmin } = user.data();
  const isHenya = email === process.env.NEXT_PUBLIC_EMAIL;

  const onToggleAdminCheckbox = async ({ currentTarget }) => {
    const { checked } = currentTarget;
    const docRef = users.find((usr) => usr.data().email === email).ref;
    await updateDocument(docRef, {
      isAdmin: checked,
    });
  };

  const onDeleteUser = async () => {
    const docRef = users.find((usr) => usr.data().email === email).ref;
    await deleteDocument(docRef);
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
          data-email={email}
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
      const userDocs = [];
      const docs = await getAllDocuments('users');
      docs.forEach((doc) => {
        userDocs.push(doc);
      });
      setUsers(
        userDocs.sort((a) =>
          a.data().email === process.env.NEXT_PUBLIC_EMAIL ? -1 : 1
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
            <th>Admin</th>
            <th>Delete user</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UsersItem user={user} users={users} key={user.data().email} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const userType = shape({
  displayName: string,
  email: string,
  isAdmin: bool,
});

UsersItem.propTypes = {
  user: userType.isRequired,
  users: arrayOf(userType).isRequired,
};

export default Users;
