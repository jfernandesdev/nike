import React, { useState } from 'react';
import { Container, TitleRadio, LabelRadio, InputRadio } from './styles';

type PropsRadio = {
  colorSelect?: string;
  variations: {
    name: string;
    colorCode: string;
  }[]
}

export const RadioColorPicker: React.FC<PropsRadio> = ({variations}) => {
  const [color, setColor] = useState('#F84848');

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
            colorCode={color}
            onChange={event => setColor(event.target.value)}
            checked={item.colorCode === color}
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