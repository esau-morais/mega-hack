import React from 'react';
import { AccountCircle } from "@material-ui/icons";
import { Box, Desc, XLink } from '../components/MainComponents';

function Account() {
  return (
    <>
      <Box>
        <AccountCircle style={{ fontSize: 75 }} />
        <Desc>Acesse ou crie sua conta! <br />É de graça!</Desc>
        <XLink to="#">Entrar</XLink>
      </Box>
    </>
  );
}

export default Account;