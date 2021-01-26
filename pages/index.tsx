import { css } from '@emotion/react';
import { NextPage } from 'next';
import { default as React } from 'react';
import { Title } from '../components/Title';

let IndexPage: NextPage = () => {
  return (
    <div>
      <Title>Index Page</Title>
      <SVGFilters></SVGFilters>
    </div>
  );
};

function SVGFilters() {
  return (
    <div>
      <svg width="338" height="179" viewBox="0 0 338 179">
        <filter id="flooder" x="0" y="0" width="100%" height="100%">
          <feFlood floodColor="hotpink" floodOpacity="0.8" result="FLOOD"></feFlood>
          <feMerge>
            <feMergeNode in="FLOOD"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <filter id="drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset in="SourceAlpha" dx="20" dy="20"></feOffset>
          <feGaussianBlur stdDeviation="10" result="DROP"></feGaussianBlur>
          <feFlood floodColor="#012" result="COLOR"></feFlood>
          <feComposite in="COLOR" in2="DROP" operator="in" result="SHADOW1"></feComposite>
          <feColorMatrix
            type="matrix"
            in="SHADOW1"
            result="FINALSHADOW"
            values="1 0 0 0 0 
					  0 1 0 0 0 
					  0 0 1 0 0 
					  0 0 0 0.3 0"
          ></feColorMatrix>
          <feMerge>
            <feMergeNode in="FINALSHADOW"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <filter id="outline">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="4"
            result="DILATED"
          ></feMorphology>
          <feFlood floodColor="orange" floodOpacity="1" result="COLOR"></feFlood>
          <feComposite in="COLOR" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
          <feMerge>
            <feMergeNode in="OUTLINE"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>

        <filter id="outliner">
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius="4"
            result="THICKNESS"
          ></feMorphology>
          <feComposite in="THICKNESS" in2="SourceGraphic" operator="out"></feComposite>
          <feGaussianBlur stdDeviation="3" result="OUTLINE"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="OUTLINE"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>

        {/* image to apply filters to */}
        <image
          xlinkHref="/img/banner2.png"
          width="100%"
          height="100%"
          // filter="url(#flooder)"
          // filter="url(#drop-shadow)"
          // filter="url(#morph)"
          x="0"
          y="0"
          css={css`
            :hover {
              filter: url(#outliner);
            }
          `}
        ></image>
      </svg>
    </div>
  );
}

export default IndexPage;
