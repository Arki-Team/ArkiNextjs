import React from "react";
import { CardWrapper, IconWrapper } from "./HowItWorksElements";

const Card = ({ icon, title, content }) => {
  return (
    <>
      <CardWrapper>
        <IconWrapper>
          {" "}
          <img alt="" src={icon} />{" "}
        </IconWrapper>
        <div>
          <h3>
            <strong>{title} </strong>{" "}
          </h3>
          <p>{content}</p>
        </div>
      </CardWrapper>
    </>
  );
};

export default Card;
