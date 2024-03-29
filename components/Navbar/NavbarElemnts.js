import styled from "styled-components";
export const Nav = styled.nav`
  background: ${(props) =>
    props.location
      ? "#6E72FC"
      : props.navbar
      ? "rgba(128,93,247,0.9)"
      : "tranparent"};
  transition: ${(props) => (props.navbar ? "all 300ms ease-in" : "")};
  filter: ${(props) =>
    props.navbar ? "drop-shadow(0 0 20px rgba(0,0,0,0.2))" : ""};
  height: 80px;

  /* background-color: #AD1DEB;
background-image: linear-gradient(326deg, #AD1DEB 0%, #6E72FC 74%); */

  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  max-width: 1600px;
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;

  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  text-decoration: none;
  margin-bottom: 0;
margin-left:-20rem;
  width: 40%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  cursor: pointer;
  /* &.active {
    border-bottom:3px solid red
} */
  /* &:hover {
    border-bottom: 3px solid #fff;
    transition: all 0.09s ease-in-out;
    color: #fff;
  } */
  height: 50px;
  width: 130px;
  margin: 1rem 1rem;
  border-radius: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #963af1;
    background-color: rgb(255, 255, 255, 0.9);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.15);
  white-space: nowrap;
  padding: 10px 22px;
  margin: 0 1rem;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #963af1;
  }
`;
