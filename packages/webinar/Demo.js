import React from 'react';
import Hexagon from './Hexagon';

const Demo = ({ title, src }) => (
  <div className="demo">
    <Hexagon
      style={{ animation: 'none', left: '-200px', transform: 'rotate(15deg)' }}
    />
    <div className="slide">
      <h2>{title}</h2>
      <iframe
        importance="high"
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
        animation: 'none',
        transform: 'rotate(-15deg)',
      }}
    />
  </div>
);

export default Demo;
