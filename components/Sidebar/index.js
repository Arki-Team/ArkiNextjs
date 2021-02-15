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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} >
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} >
            Discover
          </SidebarLink>{" "}
          <SidebarLink onClick={toggle} >
            Services
          </SidebarLink>{" "}
          <SidebarLink onClick={toggle} >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrapper>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
