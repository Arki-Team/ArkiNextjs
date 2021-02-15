import styled from "styled-components";

import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.97);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #dc1981;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  color: #dc1981;

  &:hover {
    color: #ed4257;
    transition: 0.2 ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #fff;
  border: 3px solid #dc1981;
  white-space: nowrap;
  padding: 16px 64px;
  color: #dc1981;
  font-size: 16px;
  outline: none;

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ed4257;
    border: 3px solid #ed4257;
  }
`;
