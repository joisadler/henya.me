import { arrayOf, string } from 'prop-types';
import styles from './tools.module.scss';

const Tools = ({ tools }) => {
  const shouldRenderTools = tools && tools.length > 0;
  if (!shouldRenderTools) return null;

  return (
    <div className={styles.metadata_item}>
      <h2 className={styles.metadata_title}>Tools</h2>
      {tools.map((tool) => (
        <p className={styles.metadata_text} key={tool}>
          {tool}
        </p>
      ))}
    </div>
  );
};

Tools.propTypes = {
  tools: arrayOf(string),
};

Tools.defaultProps = {
  tools: [],
};

export default Tools;
