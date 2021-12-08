import styled from 'styled-components';

interface Props {
  colorPrimary?: string;
}

export const Button = styled.button<Props>`
  background: ${props => props.colorPrimary ? props.colorPrimary : '#000' };
  color: #FFF;
  border: 0;
  padding: 12px 40px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;

  > svg {
    font-size: 18px;
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;