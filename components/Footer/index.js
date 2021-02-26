import React from "react";
import { UL, Button, Input, Social, Container, Contact } from "./FooterElemnts";

const Footer = () => {
  return (
    <>
      <Container>
        <Contact>
          <img src="/images/logo2.svg" alt="" />
          <Social>
            <img src="/images/icons/facebook.svg" alt="" />
            <img src="/images/icons/instagram.svg" alt="" />
            <img src="/images/icons/twitter.svg" alt="" />
          </Social>
        </Contact>

        <UL>
          <h1>Quick Links</h1>

          <li>Aliquet Finibus</li>
          <li>Pretium Diam.</li>
        </UL>

        <UL>
          <h1>Company</h1>
          <li>About</li>
          <li>Privecy</li>
          <li>Policy</li>
          <li>Terms &amp; Condition</li>
        </UL>

      </Container>
    </>
  );
};

export default Footer;
