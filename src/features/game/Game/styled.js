import styled, {css} from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${({ hidden }) => hidden && css`
            display: none;
        `};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    align-items: center;
    justify-content: center
  };
`;