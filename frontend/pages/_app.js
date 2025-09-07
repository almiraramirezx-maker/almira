import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add Ferrari font class to body element
    document.body.classList.add('font-ferrari');
    
    return () => {
      document.body.classList.remove('font-ferrari');
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Preload Ferrari font */}
        <link 
          rel="preload" 
          href="/assets/fonts/Ferrari-SansRegular.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 