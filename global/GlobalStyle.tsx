import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.whiteOne};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
    padding: 0;
    margin: 0;
  }

  #__next {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
