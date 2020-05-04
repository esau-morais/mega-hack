import React from 'react';
import Gallereact from 'gallereact';
 
function Slider() {
  const images = [
    {image: 'https://1.bp.blogspot.com/-Kbm_mBnMZsg/WiLAkXwHWII/AAAAAAABBx0/zjTTw629YGEl8FVDBgUo0GDNXi2UyAn9wCLcBGAs/s1600/Canal%2BBIS.png',},
    {image: 'https://prodview.com.br/wp-content/uploads/2019/09/Canal-Brasil-800x445.jpg',},
    {image: 'https://f.i.uol.com.br/fotografia/2020/03/11/15839662905e696852e0791_1583966290_3x2_xl.jpg',},
    {image: 'https://www.epgrupo.com.br/wp-content/uploads/gloob-3.jpg',},
    {image: 'https://g.glbimg.com/og/gs/gsat5/f/thumbs/padrao/2014/05/25/placeholder_cda.jpg',},
    {image: 'https://s3.glbimg.com/v1/AUTH_382620380cd24d6690281b7e056b2d8b/prod/pela_web/megapix-play.jpg',},
    {image: 'https://g.glbimg.com/og/gs/gsat4/f/thumbs/padrao/2014/05/25/placeholder_cda.jpg',},
    {image: 'https://www.mktesportivo.com/wp-content/uploads/2019/06/off.jpg',},
    {image: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/sportv-logo.jpg',},
    {image: 'https://geekpublicitario.com.br/wp-content/uploads/2018/03/novo-logo-canal-viva.jpg'}
  ];
  
  const style = {
    container: {
      margin: '.6em 0',
      width: '90%',
      height: '60% !important',
    }
  }

  return (
    <div style={style.container}>
      <Gallereact autoPlay duration={2000} images={images} />
    </div>
  );
}

export default Slider;