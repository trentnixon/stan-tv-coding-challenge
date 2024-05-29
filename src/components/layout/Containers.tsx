import styled from "styled-components";

export const PageWrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 55px 50px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 30px 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 15px 10px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.black};
  padding: 40px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 10px 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 5px 0;
  }
`;

