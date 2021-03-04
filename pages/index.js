import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { Background } from "../components/HeroSection/HeroElemnts";
import { renderToStaticMarkup } from "react-dom/server";
import { SvgCode } from "../components/Svg";

import HeroSection from "../components/HeroSection";
import HotDeals from "../components/HotDeals";
import Deals from "../components/HotDeals/Deals";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import ArkiExtention from "../components/ArkiExtention";
import Footer from "../components/Footer";

export default function Home({ jarir, extra }) {
  const BackgroundImageStyle = {
    backgroundImage: `url('data:image/svg+xml;utf8, ${encodeURIComponent(
      renderToStaticMarkup(<SvgCode />)
    )}')`,
  };
 console.log(jarir)
  return (
    <div className="container">
      <Head>
        <title>Arki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Background style={BackgroundImageStyle}>
          <HeroSection></HeroSection>{" "}
        </Background>
        <Deals products={jarir.Products} website={jarir.website} />
        <Deals products={extra.Products} website={extra.website} />
        {/* <HotDeals></HotDeals>
        <HowItWorks></HowItWorks> */}
        <ArkiExtention></ArkiExtention>
        <FAQ></FAQ>
      </main>

      <footer id="contact">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const extra = await axios
    .post("https://arkitech-api.herokuapp.com/getExtra", {
      searchTerm: "smartphone",
    })
    .then((res) => res.data)
    .catch((err) => err);
  const jarir = await axios
    .post("https://arkitech-api.herokuapp.com/getJarir", {
      searchTerm: "smartphone",
    })
    .then((res) => res.data)
    .catch((err) => err);

  return {
    props: {
      extra,
      jarir,
    },
  };
}
