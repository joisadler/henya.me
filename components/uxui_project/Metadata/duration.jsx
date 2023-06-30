import { arrayOf, string } from 'prop-types';

import styles from './metadata.module.scss';

const Duration = ({ duration }) => {
  const shouldRenderDuration = duration && duration.length > 0;
  if (!shouldRenderDuration) return null;

  return (
    <div className={styles.metadata_item}>
      <h2 className={styles.metadata_title}>Duration:</h2>
      {duration.map(year => (
        <p className={styles.metadata_text} key={year}>
          {year}
        </p>
      ))}
    </div>
  );
};

Duration.propTypes = {
  duration: arrayOf(string),
};

Duration.defaultProps = {
  duration: [],
};

export default Duration;
