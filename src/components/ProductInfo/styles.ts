import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 100px;
  align-items: center;
  height: 100vh;
`;

export const WrapperImg = styled.div``;

export const BackgroundColorBannerImg = styled.div`
  background: #F84848;
  position: absolute;
  height: 110%;
  width: 110%;
  left: -43%;
  top: 5%;
  transform: rotate(60deg);
  z-index: -1;
`;

export const BackgroundTagNike = styled.span`
  position: absolute;
  transform: rotate(-90deg);
  font-size: 300px;
  color: rgba(255, 255, 255, 0.15);
  font-weight: 900;
  left: -90px;
  bottom: 0;
  top: 5px;
`;

export const ProductImg = styled.img`
  width: 100%;
  transform: rotate(-23.31deg) translateX(-10%);
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

