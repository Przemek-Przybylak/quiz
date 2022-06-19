import styled, {css} from "styled-components";

export const Wrapper = styled.section`
  width: 600px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0 20px;
  margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    border: none;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    gap: 2px;
    width: 100vw;
    height: 300px;
    padding: 0;
  };
`;

export const WordsWrapper = styled.div`
  height: 30px;
  margin: 10px 20px;
  padding: 0;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :nth-child(2) {
    margin: 10px 15px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
      margin: 10px 15px;
    };
  }
`;

export const Word = styled.button`
  height: 10px;
  padding: 3px;
  margin: 0;
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  justify-content: center;
  text-decoration: none;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    height: 5px;
    padding: 2px;
  };

  &:focus {
    color: lightgray;
  }


  :nth-child(5) {
    margin-left: 10px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
      margin-left: 5px;
    };
  }

  :nth-child(3) {
    margin-left: 17px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
      margin-left: 7px;
    };
  }

  :nth-child(7) {
    margin-left: 0;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
      margin-left: 0;
    };
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