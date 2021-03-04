import React from "react";
import Image from 'next/image'
import { Container, UL, LI, Info, Button, } from "./ArkiExtElemnts";
import { CheckOutlined } from "@ant-design/icons";

const ArkiExtention = () => {
  return (
    <>
      <Container id='extn' >
        {" "}
        <Image height={500} width={700} src="/images/ArkiExtention.png" ></Image>
        <Info>
          <UL>
            {" "}
            <h1>
              Download <strong>Arki Extension</strong>
              <br /> &amp; Enjoy Benefits
            </h1>
            <LI>
              <CheckOutlined /> &emsp;
              <li>
                {" "}
                Phasellus Hendrerit Suspendisse Hac Habitasse Malesuada. Erat
                Gravida Duis Sempers.
              </li>
            </LI>
            <LI>
              <CheckOutlined />
              &emsp; <li>Tortor Hac Ex Penatibus Donec Cursus Ridiculus Ad.</li>
            </LI>
            <LI>
              <CheckOutlined /> &emsp;{" "}
              <li>Mollis Pulvinar Primis Elit Leo Ante.</li>
            </LI>
            <LI>
              <CheckOutlined /> &emsp;
              <li>Nec Pellentesque Efficitur Habitant Turpis.</li>
            </LI>
            <Button>Coming Soon!</Button>
          </UL>
        </Info>
      </Container>
    </>
  );
};

export default ArkiExtention;
