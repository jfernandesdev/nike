import React from 'react';
import { Header } from './components/Header';
import { ProductInfo } from './components/ProductInfo';

import { productItem } from './utils/productItem';

function App() {
  return (
    <>
      <Header />

      <ProductInfo product={productItem} />
    </>
  );
}

export default App;
