import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  width: 100%;
  height: 49px;
  padding: 5px 0 0 0;
  background-color: #000;
`;

export const Title = styled.h2`
  font-family: 'Saira', sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 38px;
`;

export const Nav = styled.footer`
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 69px;
  background-color: #000
`;

export const XLink = styled(Link)`
  font-family: 'Saira', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #FFF
`;

export const Box = styled.div`
  margin: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center
`;

export const Desc = styled(Title)`
  font-size: 18px;
  line-height: 28px
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  overflow-x: auto
`;

export const Item = styled(Link)`
  margin: 10px 6px;
  font-family: 'Saira', sans-serif;
  font-size: 15px;
  font-weight: 300;
  font-size: 18px;
  text-decoration: none;
  color: #FFF;
  border-bottom: 2px solid #FF0000;
`;