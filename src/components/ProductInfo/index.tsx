import React from 'react';
import { useFormCartContext } from '../../contexts/FormCartContext';

import { 
  Container, WrapperInfos, Title, Caption, Text, WrapperPrice, Price, InstallmentPrice, Separator
} from './styles';

import { BannerProductImg } from '../BannerProductImg';
import { RadioColorPicker } from '../RadioColorPicker';
import { RadioSizePicker } from '../RadioSizePicker';
import { PlusAndMinusButton } from '../PlusAndMinusButton';
import { Button } from '../Button';

import { MdAddShoppingCart } from 'react-icons/md';

import { realCurrencyFormatting } from '../../utils/realCurrencyFormatting';

export const ProductInfo: React.FC = () => {

  const { productItem, currentQuantity, color } = useFormCartContext();

  var filter = productItem.variations.filter(element => element.slug.includes(color));
  var colorCode = filter[0].colorCode;
  var urlPhoto = filter[0].urlPhoto;

  function amount() {
    return currentQuantity >= 1 ? realCurrencyFormatting(productItem.price * currentQuantity) : 0.00
  }

  function installmentPrice(numberOfInstallments : number) {
    var amount = productItem.price * currentQuantity;
    var result = amount / numberOfInstallments;

    return realCurrencyFormatting(result);
  }

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

            <PlusAndMinusButton />
          
            <Separator />
            <Price>
              <span>R$</span> {amount()}
              <InstallmentPrice>em até <b>10x</b> de <b>R$ {installmentPrice(10)}</b>
              </InstallmentPrice>
            </Price>
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
