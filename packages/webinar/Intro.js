import React from 'react';
import Hexagon from './Hexagon';

const Intro = () => (
  <>
    <h1
      style={{
        zIndex: '4',
        fontWeight: 600,
        textAlign: 'center',
        margin: 0,
        textShadow: '0px 6px 6px rgba(0,0,0,0.3)',
      }}
    >
      IBM and Gatsby themes
    </h1>
    <Hexagon style={{ left: '0', top: '30vh', zIndex: '0', width: '55vw' }} />
    <h3 style={{ margin: 0, marginTop: '-1rem', zIndex: '4', fontWeight: 600 }}>
      Driving impact through design
    </h3>
    <span
      style={{ margin: 0, position: 'relative', fontWeight: 300, zIndex: '4' }}
    >
      Vince Picone & Alison Joseph
    </span>
    <Hexagon
      style={{
        right: '25vw',
        top: '-8vh',
        zIndex: '3',
        width: '35vmax',
        animationDirection: 'reverse',
      }}
    />
    <Hexagon
      style={{
        right: '-5vw',
        top: '30vh',
        zIndex: '3',
        width: '40vmax',
      }}
    />
  </>
);

export default Intro;
