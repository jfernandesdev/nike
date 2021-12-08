import React from 'react';

import { Container, TitleRadio, GridInputRadioSize, LabelRadio, InputRadio } from './styles';

type PropsRadio = {
  sizes: number[];
}

export const RadioSizePicker: React.FC<PropsRadio> = ({sizes}) => {
  return (
    <Container>
      <TitleRadio>Agora o tamanho:</TitleRadio>

      <GridInputRadioSize>
        {sizes.map((num, index) => (
          <>
            <InputRadio 
              key={index}
              type="radio" 
              name="productSize" 
              id={`'${num}'`}
              value={num} 
            />

            <LabelRadio htmlFor={`'${num}'`} >
              {num}
            </LabelRadio>
          </>
        ))}
      </GridInputRadioSize>
    </Container>
  );
}