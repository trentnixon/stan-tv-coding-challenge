import React from "react";
import styled from "styled-components";
import { CarouselWrapper } from "../layout/Containers";
import { WarningText } from "../common/Text";

const NoProgramsWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const NoPrograms: React.FC = () => {
  return (
    <CarouselWrapper>
      <NoProgramsWrapper>
        <WarningText>No programs available</WarningText>
      </NoProgramsWrapper>
    </CarouselWrapper>
  );
};

export default NoPrograms;
