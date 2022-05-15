import styled from "styled-components";

export const TogglerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  
  &:active {
    filter: brightness(120%);
  }
`;
