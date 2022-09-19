import { arrayOf, string } from 'prop-types';
import styles from './metadata.module.scss';

const Roles = ({ roles }) => {
  const shouldRenderRoles = roles && roles.length > 0;
  if (!shouldRenderRoles) return null;

  return (
    <div className={styles.metadata_item}>
      <h2 className={styles.metadata_title}>Roles</h2>
      {roles.map((role) => (
        <p className={styles.metadata_text} key={role}>
          {role}
        </p>
      ))}
    </div>
  );
};

Roles.propTypes = {
  roles: arrayOf(string),
};

Roles.defaultProps = {
  roles: [],
};

export default Roles;
