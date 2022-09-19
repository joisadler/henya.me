import { arrayOf, string } from 'prop-types';
import styles from './main_features.module.scss';

const MainFeatures = ({ main_features }) => {
  const shouldRenderMainFeatures = main_features && main_features.length > 0;
  if (!shouldRenderMainFeatures) return null;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>The main features are:</h2>
      <ul className={styles.list}>
        {main_features.map((feature) => (
          <li
            className={styles.item}
            key={feature
              .split(' ')
              .map((word) => word[0])
              .join('')}
          >
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

MainFeatures.propTypes = {
  main_features: arrayOf(string),
};

MainFeatures.defaultProps = {
  main_features: [],
};

export default MainFeatures;
