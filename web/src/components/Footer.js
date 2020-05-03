import React from 'react';
import { HomeOutlined, 
  PlayArrowOutlined, 
  SearchOutlined, 
  PermIdentityOutlined 
} from '@material-ui/icons';
import { Nav, XLink } from "./MainComponents";

function Footer() {
  return(
    <Nav>
      <XLink to="/">
        <HomeOutlined />
        Início
      </XLink>
      
      <XLink to="/xplay">
        <PlayArrowOutlined />
        Assistir
      </XLink>
      
      <XLink to="/buscar">
        <SearchOutlined />
        Buscar
      </XLink>
      
      <XLink to="/sua-conta">
        <PermIdentityOutlined />
        Sua conta
      </XLink>
    </Nav>
  );
}

export default Footer;