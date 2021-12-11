import styled from 'styled-components';

export const Container = styled.div``;

export const TitleRadio = styled.h4`
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const GridInputRadioSize = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 60px);
`;

type PropsInputRadio = {
  colorPrimary?: string;
}

export const InputRadio = styled.input<PropsInputRadio>`
  display: none;

  &:checked + label{
    background: ${props => props.colorPrimary ? props.colorPrimary : '#000'};
    color: #FFF;
    font-weight: bold;
  }
`;

export const LabelRadio = styled.label`
  width: 44px;
  height: 36px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  border-radius: 10px; 
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
