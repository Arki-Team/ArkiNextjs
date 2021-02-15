import React from "react";
import Image from "next/image";
import { Carousel, Row, Col } from "antd";
import {
  MobileCarousel,
  ScrollWrapper,
  MobileScrollWrapper,
  DesktopCarousel,
} from "./HotDealElemnts";


const HotDeals = () => {

  const images = new Array(0,1,2)

  const MobieScroll = images.map((deal, i) => {
    return (
      <MobileScrollWrapper key={i}>
        <img alt="" width={"100%"} src={`/images/HotDeals/HotDeal${i}.png`} ></img>
      </MobileScrollWrapper>
    );
  });

  const BigScroll = (
    <ScrollWrapper>
      <img alt=""
        src='/images/HotDeals/HotDeals.png'
        width={"100%"}
        style={{ maxWidth: "1600px" }}
      ></img>{" "}
    </ScrollWrapper>
  );

  return (
    <>
      <Row justify={"center"} align={"middle"} style={{ marginTop: "5rem" }}>
        <Col span={8}>
          {" "}
          <h1 style={{ textAlign: "center" }}>Hot Deals</h1>{" "}
        </Col>
        <Col span={20}>
          <DesktopCarousel>
            {" "}
            <Carousel autoplay>
              {BigScroll}
              {BigScroll}
            </Carousel>{" "}
          </DesktopCarousel>
          <MobileCarousel>
            {" "}
            <Carousel style={{ width: "100%" }} autoplay>
              {MobieScroll}
            </Carousel>
          </MobileCarousel>
        </Col>
      </Row>
    </>
  );
};

export default HotDeals;
