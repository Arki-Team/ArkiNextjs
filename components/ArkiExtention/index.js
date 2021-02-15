import React from "react";

import { Container, UL, LI, Info, Button,IMG } from "./ArkiExtElemnts";
import { CheckOutlined } from "@ant-design/icons";

const ArkiExtention = () => {
  return (
    <>
      <Container>
        {" "}
        <IMG   src="/images/ArkiExtention.png" ></IMG>
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
            <Button>Add to chrome - It's Free</Button>
          </UL>
        </Info>
      </Container>
    </>
  );
};

export default ArkiExtention;
