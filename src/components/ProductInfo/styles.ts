import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 100px;
  align-items: center;
  height: 100vh;
`;

export const WrapperInfos = styled.div`
  max-width: 525px;
  padding-top: 40px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2.5em;
  line-height: 1em;
  padding-bottom: 0;
`;

export const Caption = styled.span`
  color: #9D9D9D;
  font-weight: 300;
  font-size: 1.1em;
  line-height: 32px;
`;

export const Text = styled.p`
  line-height: 1.8em;
  font-size: 0.9em;
  color: rgba(0,0,0,0.5);
  margin: 20px 0;
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.5px solid #BCB3B3;
  padding: 10px 0;
  margin-top: 10px;

`;

export const Price = styled.h4`
  font-weight: 900;
  font-size: 2em;
  line-height: 27px;
  text-align: center;
  min-width: 200px;

  > span {
    font-size: 18px;
  }
`;

export const InstallmentPrice = styled.p`
  font-weight: 100;
  font-size: 13px;
  color: #444444;
`;

export const Separator = styled.div`
  width: 0; 
  height: 43.5px;
  border: 0.5px solid #BCB3B3;
  margin: 0 50px;
`;