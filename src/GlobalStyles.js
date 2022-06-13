import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  };
  
  *, ::after, ::before {
    box-sizing: inherit;
  };
  
  body {
    padding: 0;
    margin: 0;
    transition: 300ms;
    font-family: 'Poppins', sans-serif;
    background-color: white;
  };
`;