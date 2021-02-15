import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElemnts";

import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <Nav
        navbar={navbar}
        // location={router ? router.pathname.includes("/search") : ""}
      >
        <NavbarContainer>
          <NavLogo>
            <img src="/images/logo.svg" alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>AR</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Today's Deals</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Sell</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks>Registry</NavLinks>
            </NavItem>{" "}
          </NavMenu>
          <NavBtn>
            <NavBtnLink>Login</NavBtnLink>
            <NavBtnLink>Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
