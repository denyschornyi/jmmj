import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Headroom from "headroom.js";
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
import "./header.css";

export function Header({ toggle }) {
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  });

  return (
    <Nav id="navbar-main">
      <NavbarConrtainer>
        <Logo />
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
          <NavBtnLinkOutlined href="https://jmmj.software/" target="_blank">
            Log In
          </NavBtnLinkOutlined>
          <NavBtnLink href="https://jmmj.software/" target="_blank">
            Register
          </NavBtnLink>
        </NavBtn>
      </NavbarConrtainer>
    </Nav>
  );
}
