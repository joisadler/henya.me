import { arrayOf, string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './wireframes.module.scss';

const Wireframes = ({ wireframes }) => {
  const shouldRenderWireframes = wireframes && wireframes.length > 0;
  if (!shouldRenderWireframes) return null;

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {wireframes.map((filename, i) => (
          <li className={styles.item} key={filename}>
            <WebpPicture
              containerClassName={styles.picture}
              imgClassName={styles.image}
              pathname="/images/portfolio/uxui/"
              filename={filename}
              alt={`Wireframe ${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Wireframes.propTypes = {
  wireframes: arrayOf(string),
};

Wireframes.defaultProps = {
  wireframes: [],
};

export default Wireframes;
