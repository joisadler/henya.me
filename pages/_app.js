import 'normalize.css';
import '../styles/globals.scss';
import GlobalState from 'context/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
