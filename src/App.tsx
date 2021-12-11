import { Header } from './components/Header';
import { ProductInfo } from './components/ProductInfo';
import { FormCartContextProvider } from './contexts/FormCartContext';

function App() {

  return (
    <>
      <Header />

      <FormCartContextProvider>
        <ProductInfo />
      </FormCartContextProvider>
    </>
  );
}

export default App;
