import React from 'react';
import { useFormCartContext } from '../../contexts/FormCartContext';

import { Flex, Button, CurrentQuantity } from './styles';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export const PlusAndMinusButton: React.FC = () => {
  const {currentQuantity, setCurrentQuantity}  = useFormCartContext();

  function handleCurrentQuantChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.valueAsNumber >= 1 && event.target.valueAsNumber <= 99){
      setCurrentQuantity(event.target.valueAsNumber);
    }
  }

  function incrementCount() {
    if(currentQuantity <  99) {
      setCurrentQuantity(currentQuantity + 1);
    } else {
      setCurrentQuantity(99);
    }
  }

  function decrementCount() {
    if(currentQuantity >  1) {
      setCurrentQuantity(currentQuantity  - 1);
    } else {
      setCurrentQuantity(1);
    }
  }
  
  return (
    <Flex>
      <Button type='button' onClick={decrementCount}>
        <AiOutlineMinus />
      </Button>

      <CurrentQuantity
        type='number'
        name="productQuant"
        min={1}
        max={99}
        step={1}
        value={Math.round(currentQuantity)}
        onChange={handleCurrentQuantChange}
      />

      <Button type='button' onClick={incrementCount}>
        <AiOutlinePlus /> 
      </Button>
    </Flex>
  );
}