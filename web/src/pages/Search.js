import React from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { Desc } from '../components/MainComponents';
import { Categorias, CatItem } from '../components/SearchComponents';

function Search() {
  return (
    <>
      <Input
        style={{ 
          margin: 10, 
          padding: '1px 4px',
          width: '94%',
          backgroundColor: '#3E3E3E', 
          color: '#9D9D9D', 
        }}
        id="input-with-icon-adornment"
        placeholder="Busque por tema, ator, gênero ..."
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
      />
      <Desc>Categorias</Desc>
      <Categorias>
        <CatItem to="#">Filmes</CatItem>
        <CatItem to="#">Séries</CatItem>
        <CatItem to="#">Novelas</CatItem>
        <CatItem to="#">Programas</CatItem>
        <CatItem to="#">Notícias</CatItem>
        <CatItem to="#">Matérias</CatItem>
      </Categorias>
    </>
  );
}

export default Search;