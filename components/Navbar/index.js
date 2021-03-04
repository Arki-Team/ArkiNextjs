import React, { useState, useEffect } from "react";
// import Link from 'next/Link'
import { Link as Links } from "react-scroll";
import { useRouter } from "next/router";
import Link from "next/link";
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
        location={router ? router.pathname.includes("/search") : false}
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
              <Link scroll={false} href="/">
                <Links to="deals" smooth={true} offset={-70}>
                  {" "}
                  <NavLinks>Today's Deals</NavLinks>{" "}
                </Links>
              </Link>
            </NavItem>
            <NavItem>
              <Link scroll={false} href="/">
                <Links to="extn" smooth={true} offset={-150}>
                  <NavLinks>Arki Extension</NavLinks>
                </Links>
              </Link>
            </NavItem>
            <NavItem>
              <Link scroll={false} href="/">
                <Links to="faq" smooth={true}>
                  <NavLinks>FAQ</NavLinks>
                </Links>
              </Link>
            </NavItem>{" "}
            <NavItem>
              <Link scroll={false} href="/">
                <Links to="/#contact" smooth={true}>
                  <NavLinks>Contact</NavLinks>
                </Links>
              </Link>
            </NavItem>{" "}
          </NavMenu>
          <NavBtn>
            {/* <NavLinks style={{ marginRight: "1rem" }}>AR</NavLinks>
            <NavBtnLink>Login</NavBtnLink>
            <NavBtnLink>Sign Up</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
