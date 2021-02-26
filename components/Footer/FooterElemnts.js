import styled from "styled-components";
import { Button as AntButton, Input as AntInput } from "antd";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: baseline;
  justify-items: center;
  padding: 1rem 20rem;

  background: #ffffff;
  background: -webkit-linear-gradient(top, #ffffff, #f7f5fb);
  background: -moz-linear-gradient(top, #ffffff, #f7f5fb);
  background: linear-gradient(to bottom, #ffffff, #f7f5fb);

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    padding: 5rem 3rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
 

  @media screen and (max-width: 1030px) {
    align-self: flex-start;
  
  }
`;

export const Social = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const UL = styled.ul`
  list-style: none;
padding:0;
`;

export const Button = styled(AntButton)`
  border-radius: 10px;
  height: 60px;
  width: 200px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fff;
  background: linear-gradient(#d83d94 0%, #a82ec9 48.92%, #4e7edc 100%);
  margin: 1rem 0 0 0;
`;

export const Input = styled(AntInput)`
  border-radius: 7px;
  padding: 1rem;
  border: none;
  outline: none;
  filter: drop-shadow(0 0 10px rgba(195, 195, 195, 0.1));
`;
