import styled, {css} from "styled-components";

export const Wrapper = styled.title`
  margin: 0 auto;
  font-size: 50px;
  font-weight: 700;
  display: flex;

  ${({small}) => small && css`
    font-size: 25px;
    margin-bottom: 10px;
  `};

  ${({finish}) => finish && css`
    font-size: 30px;
    margin-bottom: 5px;
  `};

  ${({score}) => score && css`
    margin-top: 10px;
    font-size: 30px;
    color: dodgerblue;
  `};
`;