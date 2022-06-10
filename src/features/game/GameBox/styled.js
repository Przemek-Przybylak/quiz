import styled, {css} from "styled-components";

export const Wrapper = styled.section`
  width: 600px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0px 20px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 2px;
  };
`;

export const WordsWrapper = styled.div`
  height: 30px;
  margin: 10px 60px;
  padding: 0px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: repeat(2, 1fr);

  :nth-child(2) {
    margin: 10px 30px;
  }
`;

export const Word = styled.button`
  height: 10px;
  padding: 3px;
  margin: 0px;
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  justify-content: center;
  text-decoration: none;

  ${({clicked}) => clicked && css`
    color: lightcoral;
  `};

  &:focus {
    color: lightgray;
  }


  :nth-child(5) {
    margin-left: 10px;
  }

  :nth-child(3) {
    margin-left: 17px;
  }

  :nth-child(7) {
    margin-left: 0px;
  }

  ${({good}) => good && css`
    color: green;

    :nth-child(2) {
      color: springgreen;
    }
  `};

  ${({bad}) => bad && css`
    color: lightcoral;

    :nth-child(2) {
      color: red;
    }
  `};

  ${({hidden}) => hidden && css`
    display: none;
  `};
`;