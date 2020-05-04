import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 49px;
  padding: 5px 0 0 0;
  background-color: #000;
  z-index: 1
`;

export const Title = styled.h2`
  font-family: 'Saira', sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 38px;
`;

export const Nav = styled.footer`
  display: inline-flex;
  position: fixed;
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
  margin: 10px 0;
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
  margin: 0 auto;
  width: 100%;
  justify-content: space-evenly;
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

export const EmbedCont = styled.div`
  margin: 1em;
  width: 90%;
  display: grid;
  align-items: center;
  justify-items: center
`;

export const Img = styled.img`
  margin: 1em;
  width: 80%
`;

export const News = styled.a`
  font-size: 16;
  fontt-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid #FF0000;
  color: #FFF
`;