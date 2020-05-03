import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Categorias = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center
`;

export const CatItem = styled(Link)`
  font-family: 'Saira', sans-serif;
  font-size: 18px;
  font-weight: 300;
  margin: 8px 7.5px;
  padding: 8px 24px;
  background-color: #474747;
  color: #FFF;
  text-decoration: none
`;