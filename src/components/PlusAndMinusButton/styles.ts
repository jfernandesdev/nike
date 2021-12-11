import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #000;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.2s all;

  :hover {
    background: #000;
    color: #FFF;
  }
`;

export const CurrentQuantity = styled.input`
  border: none;
  background: transparent;
  text-align: center;
  font-size: 18px;
  width: 50px;
  -moz-appearance: textfield;
   appearance: textfield;
  
  &::-webkit-inner-spin-button { 
    -webkit-appearance: none;  
  }

`;
