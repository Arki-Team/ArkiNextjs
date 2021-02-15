import styled from "styled-components";

export const Container = styled.div`
  min-height: 680px;
  width: 100%;
  background: linear-gradient(#fff 0%, #f4f9fe 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  /* @media screen and (max-width: 1030px) {
    flex-direction: column;
    margin: 3rem 0;
  } */
`;

export const CardWrapper = styled.div`
  height: 330px;
  width: 310px;
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #fff;
  filter: drop-shadow(3px 19px 63px #eef8f6);
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  background-color: #fff;
  filter: drop-shadow(10px -3px 48px rgba(152, 152, 152, 0.16));
`;
