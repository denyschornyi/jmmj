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
            <NavLinks to="whatwedo">What we do ?</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">Our projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="testimonials">Testimonials</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="blog">Blog</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="support">Support</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLinkOutlined to="signin">Log In</NavBtnLinkOutlined>
          <NavBtnLink to="signin">Register</NavBtnLink>
        </NavBtn>
      </NavbarConrtainer>
    </Nav>
  );
}
