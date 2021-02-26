import styled from "styled-components";
import { Button as AntButton } from "antd";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 4rem 0 0 0;
`

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

export const Button = styled.a`
  border-radius: 10px;
  height: 60px;
  width: 230px;
  white-space: nowrap;
  padding: 15px 22px;
  margin: 0 1rem;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: rgb(150, 58, 241);





  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff; */
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


