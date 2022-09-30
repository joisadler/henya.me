import { useState } from 'react';
import { shape, elementType } from 'prop-types';
import 'normalize.css';
import '../styles/globals.scss';
import GlobalState from 'context/GlobalState';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import HelpUkraine from 'components/common/HelpUkraine/HelpUkraine';

library.add(faTrash, faPlus);

function MyApp({ Component, pageProps }) {
  const [isHelpUkraineShown, setIsHelpUkraineShown] = useState(true);

  const closeHelpUkraine = () => {
    setIsHelpUkraineShown(false);
  };

  return (
    <GlobalState>
      <HelpUkraine isOpen={isHelpUkraineShown} onClose={closeHelpUkraine} />
      <Component {...pageProps} />
    </GlobalState>
  );
}

MyApp.propTypes = {
  pageProps: shape(),
  Component: elementType.isRequired,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
