import styled, {css} from "styled-components";

export const Wrapper = styled.section`
  width: 600px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 20px;
  margin: 0;
`;

export const WordsWrapper = styled.div`
  height: 20px;
  margin: 10px 50px;
  padding: 0px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const Word = styled.button`
  height: 10px;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  justify-content: center;

  ${({good}) => good && css`
    color: green;
  `};
  ${({bad}) => bad && css`
    color: red;
  `};
  ${({ hidden }) => hidden && css`
      display: none;
`};
`;