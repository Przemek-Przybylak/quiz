import {createGlobalStyle} from "styled-components";
const currentHeight = window.innerHeight;

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  };
  
  *, ::after, ::before {
    box-sizing: inherit;
  };
  
  body {
    overflow-y: hidden;
    transition: 300ms;
    font-family: 'Poppins', sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      height: ${currentHeight};
      overflow-x: hidden;
    };
  };
`;