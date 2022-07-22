import 'normalize.css';
import '../styles/globals.scss';
import GlobalState from 'context/GlobalState';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
// import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pressCountRef = useRef(0);
  useEffect(() => {
    if (router.pathname === '/manage' || router.pathname === '/signin') {
      return () => {};
    }
    const mmmEasterEgg = (e) => {
      if (e.key === 'm') {
        pressCountRef.current++;
        if (pressCountRef.current === 3) {
          pressCountRef.current = 0;
          router.push('/manage');
        }
      }
    };
    document.body.addEventListener('keyup', mmmEasterEgg);
    return () => document.removeEventListener('keyup', mmmEasterEgg);
  }, [router]);

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
