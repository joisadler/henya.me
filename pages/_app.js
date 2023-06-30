import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import GlobalState from 'context/GlobalState';
import { elementType, shape } from 'prop-types';

import 'normalize.css';
import '../styles/globals.scss';

library.add(faTrash, faPlus);

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
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
