import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Korok</title>
        <meta name="description" content="Korok" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://korok.xyz" key="ogurl" />
        <meta
          property="og:image"
          content="https://i.imgur.com/Ny3XCXv.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Korok" key="ogsitename" />
        <meta property="og:title" content="Korok" key="ogtitle" />
        <meta
          property="og:description"
          content="Korok is a security collective built around highly collaborative and informative exploit disclosure."
          key="ogdesc"
        />
        <meta name="twitter:card" content="https://i.imgur.com/JTnmTvt.png" />
        <meta name="twitter:title" content="Korok"></meta>
        <meta
          name="twitter:description"
          content="Korok is a security collective built around highly collaborative and informative exploit disclosure."
        ></meta>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
