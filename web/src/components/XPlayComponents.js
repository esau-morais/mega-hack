import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Gallereact from 'gallereact';

export const XItem = styled(Link)`
  margin: .8em .4em;
  font-family: 'Saira', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #FFF
`;
 
function XSlider() {
  const images = [
    {image: 'https://cdn.discordapp.com/attachments/703034962038882336/706652541269573672/prog_novela_2.jpg',},
    {image: 'https://static.quizur.com/i/b/5a316ae6c8f946.41772454PrettyLittleLiars-showtile.png.2017-02-03T14-27-0513-00.jpg',},
    {image: 'https://uploads.metropoles.com/wp-content/uploads/2019/12/16143052/avenida-brasil4.jpg',},
    {image: 'https://vignette.wikia.nocookie.net/lostpedia/images/1/16/Lost-season1.jpg/revision/latest?cb=20070303221754',},
    {image: 'https://cdn.ukairdates.com/wp-content/uploads/2018/07/handmaids-tale.jpg',},
    {image: 'https://s03.video.glbimg.com/x720/7754874.jpg'}
  ];
  
  const style = {
    container: {
      margin: '.6em 0',
      width: '80%',
      height: '80%',
      alignSelf: 'center'
    }
  }

  return (
    <div style={style.container}>
      <Gallereact autoPlay duration={2000} images={images} />
    </div>
  );
}

export default XSlider;