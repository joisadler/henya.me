import { useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Make scroll smooth
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function listener(e) {
        e.preventDefault();

        document
          .querySelector(e.currentTarget.getAttribute('href'))
          .scrollIntoView({
            behavior: 'smooth',
          });
      });
    });
  }, []);

  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* example for prefetch images: */}
        {/* <link rel="prefetch" href="/images/image.png" /> */}

        {/* preconnect to fonts apis */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
