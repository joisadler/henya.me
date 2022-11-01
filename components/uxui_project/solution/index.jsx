import { arrayOf, string } from 'prop-types';
import textToKey from 'utils/textToKey';
import styles from './solution.module.scss';

const Solution = ({ solution }) => {
  const shouldRenderSolution = solution && solution.length > 0;
  if (!shouldRenderSolution) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        The&nbsp;<span className={styles.text_green}>Solution</span>
      </h2>
      {solution.map(p => (
        <p className={styles.text} key={textToKey(p)}>
          {p}
        </p>
      ))}
    </section>
  );
};

Solution.propTypes = {
  solution: arrayOf(string),
};

Solution.defaultProps = {
  solution: [],
};

export default Solution;
