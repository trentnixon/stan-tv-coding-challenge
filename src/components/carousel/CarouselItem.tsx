import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { updateImageUrl } from '../../utils/imageUtils';

interface CarouselItemProps {
  program: {
    id: number;
    title: string;
    image: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ program, isActive, onMouseEnter }) => {
  const width = window.innerWidth >= 1920 ? 1080 : 720;
  const imageUrl = updateImageUrl(program.image, width);

  return (
    <StyledCarouselItem isActive={isActive} onMouseEnter={onMouseEnter}>
      <StyledLink to={`/program/${program.id}`}>
        <StyledImage src={imageUrl} alt={program.title} />
      </StyledLink>
    </StyledCarouselItem>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Use `shouldForwardProp` to filter out the `isActive` prop
const StyledCarouselItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
})<{ isActive: boolean }>`
  min-width: 200px;
  margin: 10px;
  text-align: center;
  background-color: ${(props) => (props.isActive ? '#4397fa' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 3px;

  img {
    max-width: 100%;
    height: auto;
  }

  h2 {
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-width: 150px;
    margin: 5px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 100%;
    margin: 5px 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }
`;

const StyledImage = styled.img`
  animation: ${fadeIn} 0.5s ease-in;
`;

export default CarouselItem;
