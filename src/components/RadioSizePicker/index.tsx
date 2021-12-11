import React, { useState } from 'react';

import { Container, TitleRadio, GridInputRadioSize, LabelRadio, InputRadio } from './styles';

type PropsRadio = {
  colorPrimary?: string;
  sizes: number[];
}

export const RadioSizePicker: React.FC<PropsRadio> = ({colorPrimary, sizes}) => {
  const [size, setSize] = useState(37);

  return (
    <Container>
      <TitleRadio>Agora o tamanho:</TitleRadio>

      <GridInputRadioSize>
        {sizes.map((num, index) => (
          <React.Fragment key={index}>
            <InputRadio 
              type="radio" 
              name="productSize" 
              id={`'${num}'`}
              value={num}
              onChange={event => setSize(parseInt(event.target.value, 10))}
              checked={num === size}
              colorPrimary = {colorPrimary}
              required
            />

            <LabelRadio htmlFor={`'${num}'`} >
              {num}
            </LabelRadio>
          </React.Fragment>
        ))}
      </GridInputRadioSize>
    </Container>
  );
}