import { arrayOf, shape, oneOfType, string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './screens.module.scss';

const Screens = ({ screens }) => {
  const shouldRenderScreens = screens && screens.length > 0;
  if (!shouldRenderScreens) return null;

  return (
    <section className={styles.screens}>
      {screens.map((screen) => {
        const { name: screenName, description, img_filename } = screen;
        return (
          <div key={screenName} className={styles.screen_container}>
            <WebpPicture
              containerClassName={styles.screen_picture}
              imgClassName={styles.screen_image}
              pathname="/images/portfolio/uxui/"
              filename={img_filename}
              alt={screenName}
            />
            <div className={styles.screen_info}>
              <h3 className={styles.screen_name}>{screenName}</h3>
              {description.map((p) => {
                if (Array.isArray(p)) {
                  return (
                    <ul key={p}>
                      {p.map((item) => (
                        <li
                          key={item
                            .split(' ')
                            .map((word) => word[0])
                            .join('')}
                          className={styles.screen_description}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={p
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                    className={styles.screen_description}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

Screens.propTypes = {
  screens: arrayOf(
    shape({
      name: string.isRequired,
      description: arrayOf(oneOfType([string, arrayOf(string)])).isRequired,
      img_filename: string.isRequired,
    })
  ),
};

Screens.defaultProps = {
  screens: [],
};

export default Screens;
