import React from 'react';
import styled from 'styled-components';
import NavItem from '../common/NavItem';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tv-shows', label: 'TV Shows' },
  { to: '/movies', label: 'Movies' }
];

const Navigation: React.FC = () => {
  return (
    <Nav>
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to} label={item.label} />
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export default Navigation;
