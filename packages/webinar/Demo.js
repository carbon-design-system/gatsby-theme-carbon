import React from 'react';
import Hexagon from './Hexagon';

const Demo = ({ title, src }) => (
  <div className="demo">
    <Hexagon />
    <div className="slide">
      <h2>{title}</h2>
      <iframe
        className="iframe"
        height="700"
        width="1244"
        title={title}
        src={src}
      />
    </div>
    <Hexagon
      style={{
        top: '25%',
        left: '75%',
        animation: 'spin 50s linear infinite',
        animationDirection: 'reverse',
        width: '45vw',
      }}
    />
  </div>
);

export default Demo;
