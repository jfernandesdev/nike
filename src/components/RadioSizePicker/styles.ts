import styled from 'styled-components';

export const Container = styled.div``;

export const TitleRadio = styled.h4`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const GridInputRadioSize = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 60px);
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + label{
    background: #F84848;
    color: #FFF;
    font-weight: bold;
  }
`;

export const LabelRadio = styled.label`
  width: 54px;
  height: 46px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  border-radius: 15px; 
  background: #DDDDDD;
  color: #000;
  display: inline-flex;
  font-weight: 100;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }
`;
