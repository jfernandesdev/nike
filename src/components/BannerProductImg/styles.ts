import styled from 'styled-components';

export const WrapperImg = styled.div``;

type PropsBk = {
  bkColor: string;
}

export const BackgroundColorBannerImg = styled.div<PropsBk>`
  background: ${props => props.bkColor ? props.bkColor : 'black'};
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
