import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>koroksec</title>
        <meta name="description" content="korok" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://koroksec.xyz" key="ogurl" />
        <meta
          property="og:image"
          content="https://i.imgur.com/XxlsQlD.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Korok" key="ogsitename" />
        <meta property="og:title" content="Korok" key="ogtitle" />
        <meta
          property="og:description"
          content="Korok is a smart contract security collective built around highly collaborative and informative exploit disclosure."
          key="ogdesc"
        />
        <meta name="twitter:title" content="Korok"></meta>
        <meta name="twitter:text:title" content="Korok"></meta>
        <meta
          name="twitter:image"
          content="https://i.imgur.com/6VpSZgR.png"
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@koroksec"></meta>
        <meta name="twitter:creator" content="@haruxeETH"></meta>
        <meta
          name="twitter:description"
          content="Korok is a smart contract security collective built around highly collaborative and informative exploit disclosure."
        ></meta>
      </Head>
      <Navbar />
      <div className="sm:pt-20 duration-300 pt-10" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
