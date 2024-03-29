import React from "react";
import { Img, Title, Card, ImgWrapper, Price } from "./SearchElemnts";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ image, title, price, redirectLink, website }) => {
  const { Meta } = Card;
  return (
    <>
      <Link href={redirectLink}>
        <Card
          headStyle={{ whiteSpace: "normal" }}
          cover={
            <ImgWrapper>
              <Img alt="" src={image}></Img>
            </ImgWrapper>
          }
        >
          <Meta
            title={<Title>{title} </Title>}
            description={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <Image
                  width={32}
                  height={32}
                  src={
                    website === "Jarir"
                      ? "/images/companies/jarir.svg"
                      : "/images/companies/extra.png"
                  }
                ></Image>
                <Price>{`SAR ${price}`}</Price>{" "}
              </div>
            }
          />
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
