import { arrayOf, string } from 'prop-types';
import textToKey from 'utils/textToKey';

import styles from './user_flow.module.scss';

const UserFlow = ({ user_flow }) => {
  const shouldRenderUserFlow = user_flow && user_flow.length > 0;
  if (!shouldRenderUserFlow) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>User Flow</h2>
      {user_flow.map(p => (
        <p className={styles.text} key={textToKey(p)}>
          {p}
        </p>
      ))}
    </section>
  );
};

UserFlow.propTypes = {
  user_flow: arrayOf(string),
};

UserFlow.defaultProps = {
  user_flow: [],
};

export default UserFlow;
