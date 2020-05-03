import React from 'react';
import { Item, List } from "../components/MainComponents";

function Feed() {
  return (
    <>
      <List>
        <Item to="#">Tudo</Item>
        <Item to="#">Notícias</Item>
        <Item to="#">Esportes</Item>
        <Item to="#">GShow</Item>
        <Item to="#">Vídeos</Item>
      </List>
    </>
  );
}
  
export default Feed;