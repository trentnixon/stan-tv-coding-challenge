import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --font-main: ${({ theme }) => theme.fonts.main};
    --bodyBackground: ${({ theme }) => theme.colors.black};
}

  body {
    font-family: var(--font-main);
    background-color: var(--bodyBackground);
    color: var(--white);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
