import styled from "styled-components";
const currentHeight = window.innerHeight;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow-y: revert;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    height: ${currentHeight};
    overflow-x: hidden;
  };
`;
