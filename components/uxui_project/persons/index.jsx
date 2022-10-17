import { arrayOf, shape, string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './persons.module.scss';

const Persons = ({ persons }) => {
  const shouldRenderPersons = persons && persons.length > 0;
  if (!shouldRenderPersons) return null;

  return (
    <section className={styles.container}>
      {persons.map((person) => {
        const {
          image_filename,
          name,
          position,
          age,
          education,
          family,
          hometown,
          about,
          goals,
          quote,
          painPoints,
        } = person;
        return (
          <div className={styles.person} key={name}>
            <div className={styles.main}>
              <WebpPicture
                containerClassName={styles.picture}
                imgClassName={styles.image}
                pathname="/images/portfolio/uxui/"
                filename={image_filename}
                alt={name}
              />
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.position}>{position}</p>
              <p className={styles.age}>{`Age: ${age}`}</p>
              <p className={styles.education}>{`Education: ${education}`}</p>
              <p className={styles.family}>{`Family: ${family}`}</p>
              <p className={styles.hometown}>{`Hometown: ${hometown}`}</p>
            </div>
            <div className={styles.about}>
              {about.map((p) => (
                <p
                  key={p
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
                  className={styles.about_paragraph}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className={styles.goals}>
              <h4 className={styles.goals_title}>Goals</h4>
              <ul className={styles.goals_list}>
                {goals.map((goal) => (
                  <li key={goal} className={styles.goals_item}>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <q className={styles.quote}>{`"${quote}"`}</q>
            <div className={styles.pain_points}>
              <h4 className={styles.pain_points_title}>Pain points</h4>
              <ul className={styles.pain_points_list}>
                {painPoints.map((point) => (
                  <li key={point} className={styles.pain_points_item}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

Persons.propTypes = {
  persons: arrayOf(
    shape({
      image_filename: string,
      name: string,
      position: string,
      age: string,
      education: string,
      family: string,
      hometown: string,
      about: arrayOf(string),
      goals: arrayOf(string),
      quote: string,
      painPoints: arrayOf(string),
    })
  ),
};

Persons.defaultProps = {
  persons: [],
};

export default Persons;
