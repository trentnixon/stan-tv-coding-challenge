import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 3em;
  font-weight: 400;
  line-height: 1em;
  margin: 0;
`;
 
export const P = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5em;
  margin: 1em 0;
`;

export const WarningText = styled.p`
  color: ${(props) => props.theme.colors.warning};
  font-size: 1.4em;
  font-weight: bold;
  margin: 1em 0;
`;


export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 1em;
  margin: 1em 0;
`;

export const Small = styled.small`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.35em;
  margin: 0;
`;
