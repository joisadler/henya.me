import { arrayOf, string } from 'prop-types';
import Roles from './roles';
import Tools from './tools';
import Team from './team';
import Duration from './duration';
import styles from './metadata.module.scss';

const Metadata = ({ roles, team, duration, tools }) => {
  const shouldRenderRoles = roles && roles.length > 0;
  const shouldRenderTeam = team && team.length > 0;
  const shouldRenderDuration = duration && duration.length > 0;
  const shouldRenderTools = tools && tools.length > 0;
  const shouldRenderMetadata =
    shouldRenderRoles ||
    shouldRenderTeam ||
    shouldRenderDuration ||
    shouldRenderTools;

  if (!shouldRenderMetadata) return null;
  return (
    <section className={styles.metadata_container}>
      <div className={styles.metadata}>
        <Roles roles={roles} />
        {(shouldRenderTeam || shouldRenderDuration) && (
          <div>
            <Team team={team} />
            <Duration duration={duration} />
          </div>
        )}
        <Tools tools={tools} />
      </div>
    </section>
  );
};

Metadata.propTypes = {
  roles: arrayOf(string),
  team: arrayOf(string),
  duration: arrayOf(string),
  tools: arrayOf(string),
};

Metadata.defaultProps = {
  roles: [],
  team: [],
  duration: [],
  tools: [],
};

export default Metadata;