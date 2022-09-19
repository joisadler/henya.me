import { arrayOf, string } from 'prop-types';
import styles from './solution.module.scss';

const Solution = ({ solution }) => {
  const shouldRenderSolution = solution && solution.length > 0;
  if (!shouldRenderSolution) return null;

  return (
    <section className={styles.solution_container}>
      <h2 className={styles.title}>
        The&nbsp;<span className={styles.text_green}>Solution</span>
      </h2>
      <p className={styles.text}>{solution}</p>
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
