import React from 'react';
import { Item, List } from "../components/MainComponents";
import Embed from '../components/Embed';
import HorizontalScroller from 'react-horizontal-scroll-container';

function Feed() {
  return (
    <div style={{ marginBottom: 69 }}>
      <List>
        <HorizontalScroller>
          <Item to="#">Tudo</Item>
          <Item to="#">Notícias</Item>
          <Item to="#">Esportes</Item>
          <Item to="#">GShow</Item>
          <Item to="#">Vídeos</Item>
        </HorizontalScroller>
      </List>
      <Embed />
    </div>
  );
}

export default Feed;