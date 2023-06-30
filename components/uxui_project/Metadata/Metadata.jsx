import { arrayOf, string } from 'prop-types';

import Duration from './duration';
import Roles from './roles';
import Team from './team';
import Tools from './tools';

import styles from './metadata.module.scss';

const Metadata = ({ roles, team, duration, tools, device_type }) => {
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
      <div className={styles.metadata} data-device-type={device_type}>
        {shouldRenderRoles && <Roles roles={roles} />}
        {shouldRenderTeam && <Team team={team} />}
        {shouldRenderDuration && <Duration duration={duration} />}
        {shouldRenderTools && <Tools tools={tools} />}
      </div>
    </section>
  );
};

Metadata.propTypes = {
  roles: arrayOf(string),
  team: arrayOf(string),
  duration: arrayOf(string),
  tools: arrayOf(string),
  device_type: string.isRequired,
};

Metadata.defaultProps = {
  roles: [],
  team: [],
  duration: [],
  tools: [],
};

export default Metadata;
