import styled from "styled-components";

export const MobileScrollWrapper = styled.div``;

export const DesktopCarousel = styled.div`
  display: block;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileCarousel = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    /* overflow-x: hidden;
    width:100%; */
  }
`;

export const ScrollWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const carouselContainer = styled.div`
  display:flex !important;
`;
