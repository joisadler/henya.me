import { string } from 'prop-types';

import CV from 'components/manage/cv';
import Users from 'components/manage/users';
import UxUiProjects from 'components/manage/UxUiProjects';

import styles from './main.module.scss';

const Main = ({ activePanel }) => {
  const panels = {
    users: <Users />,
    cv: <CV />,
    UxUiProjects: <UxUiProjects />,
  };

  const renderActivePanel = () => panels[activePanel];

  return <main className={styles.container}>{renderActivePanel()}</main>;
};

Main.propTypes = {
  activePanel: string.isRequired,
};

export default Main;
