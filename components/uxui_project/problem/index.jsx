import { arrayOf, string } from 'prop-types';
import textToKey from 'utils/textToKey';
import styles from './problem.module.scss';

const Problem = ({ problem }) => {
  const shouldRenderProblem = problem && problem.length > 0;
  if (!shouldRenderProblem) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        The&nbsp;<span className={styles.text_red}>Problem</span>
      </h2>
      {problem.map(p => (
        <p className={styles.text} key={textToKey(p)}>
          {p}
        </p>
      ))}
    </section>
  );
};

Problem.propTypes = {
  problem: arrayOf(string),
};

Problem.defaultProps = {
  problem: [],
};

export default Problem;
