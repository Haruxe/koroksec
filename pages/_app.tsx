import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Korok</title>
        <meta name="description" content="KorokDAO" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://korokdao.xyz" key="ogurl" />
        <meta
          property="og:image"
          content="https://i.imgur.com/JTnmTvt.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="KorokDAO" key="ogsitename" />
        <meta property="og:title" content="KorokDAO" key="ogtitle" />
        <meta
          property="og:description"
          content="KorokDAO is the most transparent, decentralized, and secure
              bug bounty platform."
          key="ogdesc"
        />
        <meta name="twitter:card" content="https://i.imgur.com/JTnmTvt.png" />
        <meta name="twitter:title" content="KorokDAO"></meta>
        <meta
          name="twitter:description"
          content="KorokDAO is the most transparent, decentralized, and secure
              bug bounty platform."
        ></meta>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
