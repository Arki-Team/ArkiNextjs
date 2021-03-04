import React from "react";
import { Carousel, Row, Col } from "antd";
import { carouselContainer } from "./HotDealElemnts";
import ProductCard from "../Search/ProductCard";

const Deals = ({ products, website }) => {
  var arr = [0, 1, 2, 3];
  const resultsRendered = products.map((result, i) => {
    return (
      <ProductCard
        image={result.img_link}
        title={result.title}
        price={result.cost}
        redirectLink={result.redirectLink}
        website={website}
      />
    );
  });


  return (
    <div id='deals' >
      <Carousel dots={false} autoplay>
        <div>
          <div style={{ display: "flex", justifyContent:'center',flexWrap:'wrap' }}>{resultsRendered.slice(0, 4)}</div>
        </div>{" "}
        <div>
          <div style={{ display: "flex", justifyContent:'center',flexWrap:'wrap'  }}>{resultsRendered.slice(4, 8)}</div>
        </div>{" "}
        {/* <div>
          <div style={{ display: "flex", justifyContent:'center',flexWrap:'wrap'  }}>{resultsRendered.slice(8, 12)}</div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent:'center',flexWrap:'wrap'  }}>{resultsRendered.slice(12, 16)}</div>
        </div> */}
      </Carousel>
      ,
    </div>
  );
};

export default Deals;
