import Users from 'components/manage/users';
import styles from './main.module.scss';

const Main = ({ activePanel }) => {
  const panels = {
    users: <Users />,
  };

  const renderActivePanel = () => panels[activePanel];

  return <main className={styles.container}>{renderActivePanel()}</main>;
};

export default Main;
