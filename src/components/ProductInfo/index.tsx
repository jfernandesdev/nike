import React from 'react';

import { Container, Title, Caption, Text} from './styles';
import { RadioColorPicker } from '../RadioColorPicker';
import { Button } from '../Button';

import { MdAddShoppingCart } from 'react-icons/md';

interface ProductProps {
  product: { 
    id: number,
    title: string,
    caption: string,
    description: string,
    price: string,
    installmentPrice: string,
    variations: {
      name: string,
      urlPhoto: string,
      colorCode: string,
    }[],
    sizes: number[],
  }
}

export const ProductInfo: React.FC<ProductProps> = ({product}) => {
  return (
    <Container>
      <Title>{product.title}</Title>
      <Caption>{product.caption}</Caption>
      <Text>{product.description}</Text>
      
      <RadioColorPicker variations={product.variations}/>

      Agora o tamanho:

      {product.sizes.map((item, index) => (
        <a key={index}>{item}</a>
      ))}

      <Text>{product.price}</Text>

      <Button>
        <MdAddShoppingCart />
        Adicionar no carrinho
      </Button>

    </Container>
  );
}
