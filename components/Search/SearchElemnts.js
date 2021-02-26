import styled from "styled-components";
import { Radio as AntRadio, Button as AntButton, Card as AntCard } from "antd";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10rem 0;
  height:auto;
  min-height:100%;

  
  

  background-color: #f6f6f8;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;

  }

`;
export const ResultsWrapper = styled.div`
  width: 100%;
`;
export const FilterContainer = styled.div`
margin:2rem;

@media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const DesktopFilter = styled.div`
  width: 20%;
  height:1000px;
  background: #fff;
  border-radius: 10px;
  

  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.1));
  margin: 0 2rem 0 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileFilter = styled.div`
  display: none;
  width: 40%;


  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const RadioGroup = styled(AntRadio.Group)``;

export const Radiowrapper = styled.div`
  margin: 2rem 0;
`;
export const VRadio = styled(AntRadio)`
  display: block;
`;
export const HRadio = styled(AntRadio.Button)`
  &::selection {
    background-color: red;
    border: none;
    outline: none;
  }
`;

export const Color = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

export const Button = styled(AntButton)``;

// ----------- ProductCard -------------------------------------------------------------

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  margin: 1rem;
  border-radius: 10px;
  padding: 2rem;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.1));
  height: 50vh;
  /* width: 350px;
  height: 450px; */
`;

export const Card = styled(AntCard)`
  max-width: 300;
  max-height: 300;
  margin: 1rem;
  height: 90%;
  text-align: right;
  font-family: "Dubai-Medium";
  cursor: pointer;
  border-radius:10px;
  width:300px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
 
`;

export const Img = styled.img`
  /* width: 50%;

  margin:1rem; */

  max-width: 200px;
  max-height: 300px;
`;

export const Title = styled.div`
  text-align: left;
  font-family: "Dubai-Medium";
  height: 5rem;
  
  white-space:normal !important;
 



  
`;
export const Price = styled.h2`
  align-self: flex-end;
  font-family: "Dubai-Medium";
  color: #4e7edc;
`;
