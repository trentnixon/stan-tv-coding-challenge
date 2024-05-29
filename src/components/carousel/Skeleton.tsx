import React from "react";
import styled from "styled-components";
import { CarouselWrapper } from "../layout/Containers";

const Skeleton: React.FC = () => {
  return (
    <CarouselWrapper>
      <SkeletonWrapper>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </SkeletonWrapper>
    </CarouselWrapper>
  );
};

const SkeletonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const SkeletonItem = styled.div`
  width: 200px;
  height: 300px;
  background-color: #606060;
  border-radius: 8px;
`;

export default Skeleton;
