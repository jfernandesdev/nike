import styled from 'styled-components';

export const WrapperImg = styled.div``;

type PropsBk = {
  bkColor: string;
}

export const BackgroundColorBannerImg = styled.div<PropsBk>`
  background: ${props => props.bkColor ? `linear-gradient(-10deg, ${props.bkColor}, ${props.bkColor} 200%)` : 'black'};
  position: absolute;
  height: 110%;
  width: 110%;
  left: -43%;
  top: 5%;
  transform: rotate(60deg);
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1),
    0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
  z-index: -1;

  &.animation{
    animation: 0.5s height ease-in;
  }

  @media(max-width: 768px) {
    transform: rotate(0);
    top: 0;
    left: 0;
  }

  @media(max-width: 768px) and (orientation: portrait) {
    height: 45vh;
  }

  @media(max-width: 768px) and (orientation: landscape) {
    height: 110vh;
  }

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
  -webkit-touch-callout: none;  /* iPhone OS, Safari */
  -webkit-user-select: none;    /* Chrome, Safari 3 */
  -khtml-user-select: none;     /* Safari 2 */
  -moz-user-select: none;       /* Firefox */
  -ms-user-select: none;        /* IE10+ */
  user-select: none;            /* Possível implementação no futuro */
  cursor: default;

  @media(max-width: 768px) {
    transform: rotate(0);
    font-size: 10rem;
    left: -5px;
    top: 15%;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  transform: rotate(-23.31deg) translateX(-10%);
  transition: .5s;

  @media(max-width: 768px) {
    transform: rotate(0) translate(-5%, 10px);
  }
`;
