import React from 'react';

import { Container, Title, Caption, Text} from './styles';
import { Button } from '../../components/Button';
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

      Escolha a cor desejada:
      {product.variations.map((item, index) => (
        <a key={index} href={item.colorCode}>{item.colorCode}</a>
      ))}

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
