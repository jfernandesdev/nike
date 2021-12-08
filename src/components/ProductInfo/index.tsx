import React from 'react';

import { 
  Container, 
  WrapperImg, 
  BackgroundColorBannerImg,
  BackgroundTagNike,
  ProductImg, 
  WrapperInfos, 
  Title, 
  Caption, 
  Text
} from './styles';

import { RadioColorPicker } from '../RadioColorPicker';
import { RadioSizePicker } from '../RadioSizePicker';
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

      <WrapperImg>
        <BackgroundColorBannerImg />
        <BackgroundTagNike>NIKE</BackgroundTagNike>
        <ProductImg src={product.variations[0].urlPhoto} alt={product.title} />
      </WrapperImg>

      <WrapperInfos>
        <Title>{product.title}</Title>
        <Caption>{product.caption}</Caption>
        <Text>{product.description}</Text>

        <RadioColorPicker variations={product.variations}/>

        <RadioSizePicker sizes={product.sizes}/>

        <Text>{product.price}</Text>

        <Button colorPrimary='#F84848'>
          <MdAddShoppingCart />
          Adicionar no carrinho
        </Button>
      </WrapperInfos>
    </Container>
  );
}
