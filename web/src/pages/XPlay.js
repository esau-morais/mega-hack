import React from 'react';
import HorizontalScroller from 'react-horizontal-scroll-container';
import { XItem } from '../components/XPlayComponents';
import Slider from '../components/Slider';

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
      </HorizontalScroller>
      <Slider />
    </>
  );
}

export default XPlay;