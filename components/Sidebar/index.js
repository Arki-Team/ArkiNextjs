import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrapper,
  SidebarLink,
} from "./SidebarElemnts";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link
            onClick={toggle}
            onClick={toggle}
            to="deals"
            smooth={true}
            offset={-70}
          >
            {" "}
            <SidebarLink>Today's Deals</SidebarLink>
          </Link>

          <Link
            onClick={toggle}
            onClick={toggle}
            to="extn"
            smooth={true}
            offset={-150}
          >
            <SidebarLink>Arki Extension</SidebarLink>
          </Link>

          <Link onClick={toggle} onClick={toggle} to="faq" smooth={true}>
            <SidebarLink> FAQ </SidebarLink>{" "}
          </Link>

          <Link onClick={toggle} onClick={toggle} to="contact" smooth={true}>
            <SidebarLink>Contact </SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrapper>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrapper>
        <SideBtnWrapper>
          <SidebarRoute to="/signin">Sign Up</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
