import React from "react";
import styled from "styled-components";
import { CarouselWrapper } from "../layout/Containers";
import { WarningText } from "../common/Text";

const ErrorWrapper = styled.div`
  color: ${(props) => props.theme.colors.error};
  display: flex;
  justify-content: left;
  align-items: left;
  height: 100px;
`;

const Error: React.FC = () => {
  return (
    <CarouselWrapper>
      <ErrorWrapper>
        <WarningText>An unknown error occurred. Please try again later.</WarningText>
      </ErrorWrapper>
    </CarouselWrapper>
  );
};

export default Error;
