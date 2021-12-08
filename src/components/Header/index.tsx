import React from 'react';
import { Container, Logo, NavBar, NavItem, NotificationNumber } from './styles';

import { BsSearch, BsCart3 } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src='./logo-nike.svg' alt="NIKE" />

      <NavBar>
        <NavItem href="#" title="Buscar">
          <BsSearch />
        </NavItem>

        <NavItem href="#" title="Menu">
          <HiMenuAlt3 />
        </NavItem>

        <NavItem href="#" title="Meu carrinho - 3 itens">
          <BsCart3 />
          <NotificationNumber>3</NotificationNumber>
        </NavItem>
      </NavBar>
    </Container>
  );
}