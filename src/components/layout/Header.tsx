import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <Logo />
      <MenuToggle onClick={toggleMenu}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        )}
      </MenuToggle>
      <NavigationWrapper isOpen={isOpen}>
        <Navigation />
      </NavigationWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.black};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

// Use `shouldForwardProp` to filter out the `isOpen` prop
const NavigationWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>`
  display: flex;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
  }
`;

export default Header;
