import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    color-scheme: light;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: radial-gradient(circle at top left, #FDF8F2 0, #F7F4EF 45%, #F3EFE8 100%);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }
`;
