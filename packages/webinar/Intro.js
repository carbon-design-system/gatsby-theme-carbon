import React from 'react';
import Hexagon from './Hexagon';

const Intro = () => (
  <>
    <h1
      style={{
        zIndex: '4',
        fontWeight: 600,
        margin: 0,
        textShadow: '0px 6px 6px rgba(0,0,0,0.3)',
      }}
    >
      IBM and Gatsby themes
    </h1>
    <Hexagon style={{ left: '-10%', top: '-10%', zIndex: '0' }} />
    <h3 style={{ margin: 0, marginTop: '-1rem', zIndex: '2', fontWeight: 600 }}>
      Driving impact through design
    </h3>
    <span style={{ margin: 0, position: 'relative', fontWeight: 300 }}>
      Vince Picone & Alison Joseph
    </span>
    <Hexagon
      style={{
        left: '55%',
        top: '-10%',
        zIndex: '3',
        width: '22vw',
        animation: 'spin 40s linear infinite',
      }}
    />
    <Hexagon
      style={{
        left: '69.5%',
        top: '42%',
        zIndex: '3',
        width: '30vw',
        animation: 'spin 50s linear infinite reverse',
      }}
    />
  </>
);

export default Intro;
