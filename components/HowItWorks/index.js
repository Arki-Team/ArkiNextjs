import React from "react";

import { Container, CardsWrapper } from "./HowItWorksElements";
import Card from "./Card";
const HowItWorks = () => {
  return (
    <>
      <Container>
        <h1>How It Works</h1>{" "}
        <CardsWrapper>
          <Card
            icon={"/images/icons/ecommerce.svg"}
            title="Search Product"
            content="Search the product you like and order anytime you want"
          ></Card>

          <Card
            icon={"/images/icons/add-to-cart.svg"}
            title="Add To Cart"
            content="Select the product and add to your cart"
          ></Card>
          <Card
            icon={"/images/icons/payment-method.svg"}
            title="Add Payment Method"
            content="Select the product and add to your cart"
          ></Card>
          <Card
            icon={"/images/icons/hnadcart.svg"}
            title="Check Out"
            content="Select the product and add to your cart"
          ></Card>
        </CardsWrapper>{" "}
      </Container>
    </>
  );
};

export default HowItWorks;
