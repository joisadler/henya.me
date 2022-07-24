import 'normalize.css';
import '../styles/globals.scss';
import GlobalState from 'context/GlobalState';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(
  // fab,
  faTrash
);

// import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script> */}
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
