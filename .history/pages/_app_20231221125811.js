
/* eslint-disable quotes */
import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Pet 2 Place | UAE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://res.cloudinary.com/driibhe5y/image/upload/v1703143633/thumbnail_wlfpju.png"
      />
      <link rel="preconnect" href="https://p2puae.netlify.com" />
      <link
        rel="stylesheet"
        href="https://res.cloudinary.com/driibhe5y/image/upload/v1703143633/thumbnail_wlfpju.png"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
