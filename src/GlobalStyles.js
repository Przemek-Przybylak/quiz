import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  ;
  *, ::after, ::before {
    box-sizing: inherit;
  }

  ;
  body {
    overflow-y: hidden;
    transition: 300ms;
    font-family: 'Poppins', sans-serif;
  }

  ;
`;