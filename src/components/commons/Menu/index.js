import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

//Componente de Menu
export default function Menu(){
  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas Frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    }
  ]
  return(
    <MenuWrapper>
      {/* Logo Area (Esquerda) */}
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      {/* Links Area (Centro) */}
      <MenuWrapper.CentralSide>
        {links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>
                {link.text}
              </a>
            </li>
        ))}
      </MenuWrapper.CentralSide>
      {/* Buttons Area (Direita) */}
      <MenuWrapper.RightSide>
        {/* Aqui estamos passando uma props particular desse button chamada de ghost para o nosso component Button */}
        {/* A variant permite que o button receba qualquer modificação de estilo do theme */}
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>

    </MenuWrapper>
  );
}
