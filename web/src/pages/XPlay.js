import React from 'react';
import HorizontalScroller from 'react-horizontal-scroll-container';
import XSlider, { XItem } from '../components/XPlayComponents';

function XPlay() {
  return (
    <>
      <HorizontalScroller>
        <XItem to="#">
          <img src="/images/Globo.png" alt="Globo"/>
          Globo
        </XItem>
        <XItem to="#">
          <img src="/images/BBB.png" alt="BBB"/>
          BBB
        </XItem>
        <XItem to="#">
          <img src="/images/G1.png" alt="G1"/>
          G1
        </XItem>
        <XItem to="#">
          <img src="/images/GShow.png" alt="GShow"/>
          GShow
        </XItem>
        <XItem to="#">
          <img src="/images/GE.png" alt="GE"/>
          GE
        </XItem>
        <XItem to="/xplay/gsatplay">
          <img src="/images/GSatPlay.png" alt="GSatPlay"/>
          GSatPlay
        </XItem>
      </HorizontalScroller>
      <XSlider />
    </>
  );
}

export default XPlay;