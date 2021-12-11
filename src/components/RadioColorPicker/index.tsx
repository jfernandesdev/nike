import React from 'react';
import { Container, TitleRadio, LabelRadio, InputRadio } from './styles';

import { useFormCartContext } from '../../contexts/FormCartContext';

type PropsRadio = {
  colorSelect?: string;
  variations: {
    slug: string;
    colorCode: string;
  }[]
}

export const RadioColorPicker: React.FC<PropsRadio> = ({variations}) => {
  const { color, setColor } = useFormCartContext();

  return (
    <Container>
      <TitleRadio>Escolha a cor desejada:</TitleRadio>

      {variations.map((item, index) => (
        <React.Fragment key={index}>
          <InputRadio
            type="radio" 
            name="productColor" 
            id={item.slug}
            value={item.slug} 
            colorCode={item.colorCode}
            onChange={event => setColor(event.target.value)}
            checked={item.slug === color}
            required
          />
          <LabelRadio 
            htmlFor={item.slug} 
            colorCode={item.colorCode} 
            title={item.slug}
          />
        </React.Fragment>
      ))}
    </Container>
  );
}