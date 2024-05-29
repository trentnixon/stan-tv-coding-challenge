import styled from "styled-components";

export const ProgramContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 40px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

// Left Image
export const ProgramImageWrapper = styled.div`
  grid-column: span 4;
  display: flex;
  justify-content: left;
  align-items: left;

  @media (min-width: ${(props) => props.theme.breakpoints.hd}) {
    grid-column: span 2;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-column: span 3;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-column: span 12;
    justify-content: center;
    align-items: center;
  }
`;

export const ProgramImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;



export const DetailsWrapper = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-column: span 12;
  }
`;

export const ProgramInfo = styled.div`
  display: flex;
 
    align-items: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.light};
`;
