import styled, {css} from "styled-components";

export const InputBox = styled.input`
  margin: 15px 0 0 0;
  padding:20px 10px;
  width: 500px;
  font-size: 17px;
  border: 1px solid rgb(118, 118, 118);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 5px 0 0 0;
    padding: 10px 5px;
    max-width: 300px;
    font-size: 13px;
  };
`;
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