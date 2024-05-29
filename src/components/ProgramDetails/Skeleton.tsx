import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProgramSkeleton: React.FC = () => {
  return (
    <SkeletonWrapper data-testid="program-skeleton">
      <SkeletonHeader>
        <SkeletonLogo />
        <SkeletonNav>
          <SkeletonNavItem />
          <SkeletonNavItem />
          <SkeletonNavItem />
        </SkeletonNav>
      </SkeletonHeader>
      <SkeletonContent>
        <SkeletonImage />
        <SkeletonDetails>
          <SkeletonLine />
          <SkeletonLine short />
          <SkeletonLine long />
        </SkeletonDetails>
      </SkeletonContent>
    </SkeletonWrapper>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const SkeletonLogo = styled.div`
  width: 100px;
  height: 30px;
  background: #333;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonNav = styled.div`
  display: flex;
  gap: 20px;
`;

const SkeletonNavItem = styled.div`
  width: 60px;
  height: 20px;
  background: #333;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonContent = styled.div`
  display: flex;
  gap: 20px;
`;

const SkeletonImage = styled.div`
  width: 300px;
  height: 450px;
  background: #333;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkeletonLine = styled.div<{ short?: boolean; long?: boolean }>`
  width: ${({ short }) => (short ? '150px' : '100%')};
  width: ${({ long }) => (long ? '100%' : '200px')};
  height: 20px;
  background: #333;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite linear;
`;

export default ProgramSkeleton;
