import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavItemProps } from "../../types/types";



const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavItemWrapper isActive={isActive}>
      <Link to={to}>{label}</Link>
    </NavItemWrapper>
  );
};

// Use `shouldForwardProp` to filter out the `isActive` prop
const NavItemWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
})<{ isActive: boolean }>`
  a {
    color: ${(props) =>
      props.isActive ? props.theme.colors.white : "#878787"};
    text-decoration: none;
    padding-right: 40px;
    font-size: 1.6em;
    font-weight: 900;
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default NavItem;
