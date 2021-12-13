import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Poppins', Verdana, Arial, Helvetica, sans-serif;
 }

 body {
    overflow-x: hidden;
  }

 @media(min-width: 769px) {
  html, body {
    overflow: hidden;
  }

  @keyframes height{
    from{
        height: 0%;
    }
    to{
        height: 110%;
    }
  }
 }

`;