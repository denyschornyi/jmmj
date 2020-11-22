import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Logo,
  Nav,
  NavbarConrtainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLinkOutlined,
  NavBtnLink
} from "./HeaderElements";

export function Header({ toggle }) {
  return (
    <Nav>
      <NavbarConrtainer>
        <Logo to="header" />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              href="https://jmmj.software/#portfolio_projects"
              target="_blank"
            >
              What we do ?
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              href="https://jmmj.software/#portfolio_projects"
              target="_blank"
            >
              Our projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              href="https://jmmj.software/#portfolio_references"
              target="_blank"
            >
              Testimonials
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="https://jmmj.software/blog/" target="_blank">
              Blog
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="https://jmmj.software/support/" target="_blank">
              Support
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLinkOutlined href="/">Log In</NavBtnLinkOutlined>
          <NavBtnLink href="/">Register</NavBtnLink>
        </NavBtn>
      </NavbarConrtainer>
    </Nav>
  );
}
