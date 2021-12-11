import { createContext, useState, useContext, ReactNode } from 'react';
import { productItem } from '../utils/productItem';

interface ProductProps {
  id: number,
  title: string,
  caption: string,
  description: string,
  price: number,
  variations: {
    slug: string,
    urlPhoto: string,
    colorCode: string,
  }[],
  sizes: number[],
}

type FormCartContextData = {
  productItem: ProductProps;
  color: string;
  size: number;
  currentQuantity: number;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const FormCartContext = createContext({} as FormCartContextData);

type FormCartContextProviderProps = {
  children: ReactNode;
}

export function FormCartContextProvider({children}: FormCartContextProviderProps) {
  const [color, setColor] = useState('red');
  const [size, setSize] = useState(37);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  return (
    <FormCartContext.Provider value={{ productItem, color, setColor, size, setSize, currentQuantity, setCurrentQuantity }}>
      {children}
    </FormCartContext.Provider>
  )
}

export const useFormCartContext = () =>  {
  return useContext(FormCartContext)
}