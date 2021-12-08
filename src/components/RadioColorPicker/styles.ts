import styled from 'styled-components';

interface PropsLabelRadio {
  colorCode?: string;
}

export const Container = styled.div``;

export const TitleRadio = styled.h4`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const InputRadio = styled.input<PropsLabelRadio>`
  display: none;

  &:checked + label{
    position: relative;
    transform: scale(.9);
   
    &:before {
      content: '';
      background: transparent;
      border: 1px solid ${props => props.colorCode ? props.colorCode : '#000'};
      width: 22px;
      height: 22px;
      position: absolute;
      border-radius: 100%;
      z-index: -1;
      transform: scale(1.25);
    }
  }
`;

export const LabelRadio = styled.label<PropsLabelRadio>`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  border-radius: 100%; 
  background: ${props => props.colorCode ? props.colorCode : ''};

  &:hover {
    transform: scale(1.05);
  }
`;
