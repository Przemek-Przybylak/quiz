import styled, {css} from "styled-components";

export const InputBox = styled.input`
  margin: 15px 0px;
  padding:20px 10px;
  width: 500px;
  font-size: 17px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${({ hidden }) => hidden && css`
            display: none;
        `};

`;