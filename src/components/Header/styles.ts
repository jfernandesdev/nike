import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  filter: invert(0%);

  @media(max-width: 768px) {
    width: 80px;
    filter: invert(100%);
  }
`;

export const NavBar = styled.div``;

export const NavItem = styled.a`
  font-size: 25px;
  color: #000;
  padding: 0 8px;
  position: relative;
`;

export const NotificationNumber = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  font-size: 10px;
  color: #FFF;
  background: #F84848;
  border-radius: 50%;
  top: -3px;
  right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;