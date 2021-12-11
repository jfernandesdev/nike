import React, { useEffect } from 'react';
import { WrapperImg,  BackgroundColorBannerImg, BackgroundTagNike, ProductImg } from './styles';

interface PropsProductImg {
  bkColor: string;
  urlPhoto: string;
  titleProduct: string;
}

export const BannerProductImg: React.FC<PropsProductImg> = ({
  bkColor, urlPhoto, titleProduct
}) => {

  useEffect(() => {
    let element =document.querySelector('#backgroundColorBannerImg');
    element && element.classList.add('animation');
    
    setTimeout(() => {
      element && element.classList.remove('animation');
    }, 1000);
  }, [bkColor]);

  return (
    <WrapperImg>
      <BackgroundColorBannerImg 
        bkColor={bkColor}
        id="backgroundColorBannerImg"
      />
      <BackgroundTagNike>NIKE</BackgroundTagNike>
      <ProductImg 
        src={urlPhoto} 
        alt={titleProduct} 
      />
  </WrapperImg>
  );
}