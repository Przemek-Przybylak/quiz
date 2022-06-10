import styled from "styled-components";

export const TogglerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Toggler = styled.button`
  color: #60aeee;
  border: #60aeee 1px solid;
  border-radius: 5px;
  padding: 10px 40px;
  background-color: white;
  font-size: 17px;
  width: auto;
  font-weight: 600;
  transition: 300ms;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 5px 20px;
    font-size: 13px;
  };
  
  &:active {
    filter: brightness(120%);
  }
`;
