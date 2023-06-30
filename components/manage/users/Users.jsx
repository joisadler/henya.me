/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { useEffect, useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFirestore } from 'hooks/useFirestore';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import styles from './users.module.scss';

const UsersItem = ({ user, users, forceUpdate }) => {
  const { updateDocument, deleteDocument } = useFirestore();
  const { displayName, email, isAdmin } = user.data();
  const isHenya = email === process.env.NEXT_PUBLIC_EMAIL;

  const onToggleAdminCheckbox = async ({ currentTarget }) => {
    const { checked } = currentTarget;
    const docRef = users.find(usr => usr.data().email === email).ref;
    await updateDocument(docRef, {
      isAdmin: checked,
    });
  };

  const onDeleteUser = async () => {
    const docRef = users.find(usr => usr.data().email === email).ref;
    if (confirm(`Are you sure you want to delete ${displayName}?`) === true) {
      await deleteDocument(docRef);
      forceUpdate();
    }
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
  const [updated, forceUpdate] = useReducer(x => x + 1, 0);
  const { db, getAllDocuments, createDocument } = useFirestore();
  const [users, setUsers] = useState([]);
  const [isAddFormShown, setIsAddFormShown] = useState(false);

  useEffect(() => {
    (async () => {
      const userDocs = [];
      const docs = await getAllDocuments('users');
      docs?.forEach(doc => {
        userDocs.push(doc);
      });
      setUsers(
        userDocs.sort(a =>
          a.data().email === process.env.NEXT_PUBLIC_EMAIL ? -1 : 1
        )
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, updated]);

  const onAddUserButtonClick = () => {
    setIsAddFormShown(true);
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get('displayName');
    const email = formData.get('email');
    const isAdmin = !!formData.get('isAdmin');
    const data = {
      displayName,
      email,
      isAdmin,
    };
    await createDocument('users', data);
    setIsAddFormShown(false);
    forceUpdate();
  };

  const onDiscardAddingUser = () => {
    setIsAddFormShown(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.page_title}>
        Manage <strong>Users</strong>
      </h1>
      {users.length > 0 && (
        <>
          <table className={styles.users_table}>
            <thead>
              <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete user</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UsersItem
                  user={user}
                  users={users}
                  forceUpdate={forceUpdate}
                  key={user.data().email}
                />
              ))}
            </tbody>
          </table>
          {!isAddFormShown && (
            <button
              type="button"
              className={styles.add_user_button}
              onClick={onAddUserButtonClick}
              aria-label="Add user"
            >
              <FontAwesomeIcon icon="fa-plus" />
            </button>
          )}
          {isAddFormShown && (
            <form className={styles.add_user_form} onSubmit={onFormSubmit}>
              <h2 className={styles.form_title}>Add user</h2>
              <section className={styles.form_inputs}>
                <div className={styles.input_container}>
                  <label htmlFor="displayName" className={styles.label}>
                    Full name
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="displayName"
                    id="displayName"
                    placeholder="John Snow"
                  />
                </div>
                <div className={styles.input_container}>
                  <label htmlFor="displayName" className={styles.label}>
                    Email
                  </label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johnsnow@gmail.com"
                  />
                </div>
                <div className={styles.checkbox_container}>
                  <label htmlFor="displayName" className={styles.label}>
                    Admin
                  </label>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="isAdmin"
                    id="isAdmin"
                    defaultChecked={false}
                  />
                </div>
              </section>
              <br />
              <div className={styles.buttons_container}>
                <button type="submit" className={styles.save_button}>
                  Save
                </button>
                <button
                  type="button"
                  className={styles.discard_button}
                  onClick={onDiscardAddingUser}
                >
                  Discard
                </button>
              </div>
            </form>
          )}
        </>
      )}
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
  forceUpdate: func.isRequired,
};

export default Users;
