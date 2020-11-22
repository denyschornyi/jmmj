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
          <SidebarLink
            href="https://jmmj.software/#portfolio_projects"
            target="_blank"
            onClick={toggle}
          >
            What we do ?
          </SidebarLink>
          <SidebarLink
            href="https://jmmj.software/#portfolio_projects"
            target="_blank"
            onClick={toggle}
          >
            Our projects
          </SidebarLink>
          <SidebarLink
            href="https://jmmj.software/#portfolio_references"
            target="_blank"
            onClick={toggle}
          >
            Testimonials
          </SidebarLink>
          <SidebarLink
            href="https://jmmj.software/blog/"
            target="_blank"
            onClick={toggle}
          >
            Blog
          </SidebarLink>
          <SidebarLink
            href="https://jmmj.software/support/"
            target="_blank"
            onClick={toggle}
          >
            Support
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/" onClick={toggle}>
            Log In
          </SidebarRoute>
          <SidebarRoute href="/" onClick={toggle}>
            Register
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
