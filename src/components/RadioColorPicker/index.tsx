import React from 'react';

import { Container, TitleRadio, LabelRadio, InputRadio } from './styles';

type PropsRadio = {
  variations: {
    name: string;
    colorCode: string;
  }[]
}

export const RadioColorPicker: React.FC<PropsRadio> = ({variations}) => {
  return (
    <Container>
      <TitleRadio>Escolha a cor desejada:</TitleRadio>

      {variations.map((item, index) => (
        <>
          <InputRadio 
            key={index}
            type="radio" 
            name="productColor" 
            id={item.colorCode}
            value={item.colorCode} 
            colorCode={item.colorCode}
          />
          <LabelRadio 
            htmlFor={item.colorCode} 
            colorCode={item.colorCode} 
            title={item.name}
          />
        </>
      ))}
    </Container>
  );
}