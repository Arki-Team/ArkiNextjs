import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";


import { Background } from "../components/HeroSection/HeroElemnts";
import { renderToStaticMarkup } from "react-dom/server";
import { SvgCode } from "../components/Svg";

import HeroSection from "../components/HeroSection";
import HotDeals from "../components/HotDeals";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import ArkiExtention from "../components/ArkiExtention";
import Footer from "../components/Footer";

export default function Home() {

  const BackgroundImageStyle = {
    backgroundImage: `url('data:image/svg+xml;utf8, ${encodeURIComponent(
      renderToStaticMarkup(<SvgCode />)
    )}')`,
  };
  return (
    <div className="container">
       <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Background style={BackgroundImageStyle}>
          <HeroSection></HeroSection>{" "}
        </Background>
        <HotDeals></HotDeals>
        <HowItWorks></HowItWorks>
        <ArkiExtention></ArkiExtention>
        <FAQ></FAQ>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}
