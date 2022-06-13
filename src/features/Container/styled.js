import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: revert;
  margin: 0;
  padding: 0;
  height: var(--innerWindowHeight, 100vh);
`;
