import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements";

export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="whatwedo">What we do ?</SidebarLink>
          <SidebarLink to="projects">Our projects</SidebarLink>
          <SidebarLink to="testimonials">Testimonials</SidebarLink>
          <SidebarLink to="blog">Blog</SidebarLink>
          <SidebarLink to="support">Support</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin">Log In</SidebarRoute>
          <SidebarRoute to="register">Register</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
