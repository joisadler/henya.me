import { arrayOf, string } from 'prop-types';
import styles from './metadata.module.scss';

const Team = ({ team }) => {
  const shouldRenderTeam = team && team.length > 0;
  if (!shouldRenderTeam) return null;

  return (
    <div className={styles.metadata_item}>
      <h2 className={styles.metadata_title}>Team:</h2>
      {team.map(teammate => (
        <p className={styles.metadata_text} key={teammate}>
          {teammate}
        </p>
      ))}
    </div>
  );
};

Team.propTypes = {
  team: arrayOf(string),
};

Team.defaultProps = {
  team: [],
};

export default Team;
