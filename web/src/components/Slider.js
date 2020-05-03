import React from 'react';
import Gallereact from 'gallereact';
 
function Slider() {
  const images = [
    {image: 'https://lh3.googleusercontent.com/qQvtRggb0YFhsMY74Vx9Ry7WtSLr3G3i4P0oPOgCiIsjmXhSY3dFNra2os3fSDdJ4hAy=s151'},
    {image: '/images/newsletter.jpg'},
    {image: '/images/newsletter.jpg'},
    {image: '/images/newsletter.jpg'},
  ];
  
  const style = {
    container: {
      margin: '.6em 0',
      width: '70%',
      height: '60%'
    }
  }

  return (
    <div style={style.container}>
      <Gallereact images={images} />
    </div>
  );
}

export default Slider;