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
          <SidebarLink to="whatwedo" onClick={toggle}>
            What we do ?
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Our projects
          </SidebarLink>
          <SidebarLink to="testimonials" onClick={toggle}>
            Testimonials
          </SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="support" onClick={toggle}>
            Support
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin" onClick={toggle}>
            Log In
          </SidebarRoute>
          <SidebarRoute to="register" onClick={toggle}>
            Register
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
