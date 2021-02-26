import styled from "styled-components";

export const Background = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  min-height: 1000px;
margin-bottom:-300px;
@media screen and (max-width: 1030px) {
margin-bottom:-100px;
   
  }
  /* width: 100vw; */
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 100px;
  margin: 0 0 -80px 0;
`;

export const HeroTextWrapper = styled.div`
  padding: 5rem 2rem;
`;

export const H1 = styled.h1`
  color: #fff;
  margin: 0 0 -1rem 0;
  font-size: 58px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const H2 = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CompaniesImgeswrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 8rem;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-content: space-around;
    margin: 5rem 0 0 0;
  }
`;

export const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.15);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 60px;
  width: 200px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #dc1981;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  height: 60px;
  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  outline: none;
  margin: 0 1rem 0 0 !important;
  filter: drop-shadow(0 0 10px rgba(195, 195, 195, 0.1));

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: baseline;
  width: 100%;
  margin: 2rem 0;
`;
