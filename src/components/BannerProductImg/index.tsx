import React from 'react';

import { 
  WrapperImg,  
  BackgroundColorBannerImg,
  BackgroundTagNike,
  ProductImg
} from './styles';

interface PropsProductImg {
  bkColor: string;
  urlPhoto: string;
  titleProduct: string;
}

export const BannerProductImg: React.FC<PropsProductImg> = ({
  bkColor, urlPhoto, titleProduct
}) => {
  return (
    <WrapperImg>
      <BackgroundColorBannerImg bkColor={bkColor} />
      <BackgroundTagNike>NIKE</BackgroundTagNike>
      <ProductImg 
        src={urlPhoto} 
        alt={titleProduct} 
      />
  </WrapperImg>
  );
}