import React from 'react';
import { useFormCartContext } from '../../contexts/FormCartContext';

import { 
  Container, WrapperInfos, Title, Caption, Text, WrapperPrice, Price, InstallmentPrice, Separator
} from './styles';

import { BannerProductImg } from '../BannerProductImg';
import { RadioColorPicker } from '../RadioColorPicker';
import { RadioSizePicker } from '../RadioSizePicker';
import { Button } from '../Button';

import { MdAddShoppingCart } from 'react-icons/md';

export const ProductInfo: React.FC = () => {

  const { productItem, color } = useFormCartContext();

  var filter = productItem.variations.filter(element => element.slug.includes(color));
  var colorCode = filter[0].colorCode;
  var urlPhoto = filter[0].urlPhoto;

  return (
     <form>
      <Container>
        <BannerProductImg bkColor={colorCode}  urlPhoto={urlPhoto} titleProduct={productItem.title} />

        <WrapperInfos>
          <Title>{productItem.title} </Title>
          <Caption>{productItem.caption}</Caption>
          <Text>{productItem.description}</Text>

          <RadioColorPicker variations={productItem.variations}/>
          <RadioSizePicker sizes={productItem.sizes} colorPrimary={colorCode}/>

          <WrapperPrice>
            <Price><span>R$</span>{productItem.price}</Price>
            <Separator />
            <InstallmentPrice><span>em até</span> <br />{productItem.installmentPrice}</InstallmentPrice>
          </WrapperPrice>

          <Button type="submit" colorPrimary={colorCode}>
            <MdAddShoppingCart />
            Adicionar no carrinho
          </Button>

        </WrapperInfos>
      </Container>
    </form>
  );
}
