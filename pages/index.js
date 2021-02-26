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

export default function Home(props) {

  const BackgroundImageStyle = {
    backgroundImage: `url('data:image/svg+xml;utf8, ${encodeURIComponent(
      renderToStaticMarkup(<SvgCode />)
    )}')`,
  };
  return (
    <div className="container">
      <Head>
        <title>Arki
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Background style={BackgroundImageStyle} >
          <HeroSection></HeroSection>{" "}

        </Background>
        <Deals products={props.Products} webite={props.website} />
        <Deals products={props.Products} webite={props.website} />
        {/* <HotDeals></HotDeals>
        <HowItWorks></HowItWorks> */}
        <ArkiExtention></ArkiExtention>
        <FAQ  ></FAQ>
      </main>

      <footer id="contact" >
        <Footer></Footer>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const props = await axios
    .post("https://arkitech-api.herokuapp.com/getJarir", { searchTerm: "smartphone" })
    .then((res) => res.data)
    .catch((err) => err);
  return {
    props, // will be passed to the page component as props
  };
}
