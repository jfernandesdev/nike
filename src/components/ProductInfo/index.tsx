import React from 'react';

import { 
  Container,
  WrapperInfos, 
  Title, 
  Caption, 
  Text,
  WrapperPrice,
  Price,
  InstallmentPrice,
  Separator
} from './styles';

import { BannerProductImg } from '../BannerProductImg';
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
     
      <BannerProductImg
        bkColor='#F84848'
        urlPhoto={product.variations[0].urlPhoto}
        titleProduct={product.title}
      />

      <WrapperInfos>
        <Title>{product.title}</Title>
        <Caption>{product.caption}</Caption>
        <Text>{product.description}</Text>

        <RadioColorPicker variations={product.variations}/>

        
        <RadioSizePicker sizes={product.sizes}/>

        <WrapperPrice>
          <Price><span>R$</span>{product.price}</Price>
          <Separator />
          <InstallmentPrice><span>em até</span> <br />{product.installmentPrice}</InstallmentPrice>
        </WrapperPrice>

        <Button colorPrimary='#F84848'>
          <MdAddShoppingCart />
          Adicionar no carrinho
        </Button>
      </WrapperInfos>
    </Container>
  );
}
