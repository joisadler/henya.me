import { useState } from 'react';
import { shape, elementType } from 'prop-types';
import 'normalize.css';
import '../styles/globals.scss';
import GlobalState from 'context/GlobalState';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

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
