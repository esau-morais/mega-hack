import React from 'react';
import { AccountCircle } from "@material-ui/icons";
import { Box, Desc } from '../components/MainComponents';
import Dialog from '../components/Dialog';

function Account() {
  return (
    <>
      <Box>
        <AccountCircle style={{ fontSize: 75 }} />
        <Desc>Acesse ou crie sua conta! <br />É de graça!</Desc>
        <Dialog />
      </Box>
    </>
  );
}

export default Account;