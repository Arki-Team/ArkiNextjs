import React from "react";
import { Img, Title, Card, ImgWrapper, } from "./SearchElemnts";

const ProductCard = ({ image, title, price }) => {
  const { Meta } = Card;
  return (
    <>
      <Card
        cover={
          <ImgWrapper>
            <Img alt="" src={image}></Img>
          </ImgWrapper>
        }
      >
        <Meta title={<Title>{title}</Title>} description={price} />
      </Card>

      {/* <CardWrapper>
     <ImgWrapper>
         <Img src={image}></Img>
     </ImgWrapper>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </CardWrapper> */}
    </>
  );
};

export default ProductCard;
