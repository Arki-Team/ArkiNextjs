import styled from "styled-components";
import { Button as AntButton } from "antd";

export const Container = styled.div`
  /* display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center; */
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    margin: 5rem 0 0 0;
    width: 80%;
  }
`;

export const UL = styled.ul`
  list-style: none;
  padding: 0 0 5rem 0;
`;

export const LI = styled.div`
  display: flex;
  margin: 2rem 0;
`;

export const Button = styled(AntButton)`
  border-radius: 10px;
  height: 60px;
  width: 230px;
  color: #fff;
  background: linear-gradient(#d83d94 0%, #a82ec9 48.92%, #4e7edc 100%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IMG = styled.img`
  width: 100%;
  max-width: 1050px;
`;
