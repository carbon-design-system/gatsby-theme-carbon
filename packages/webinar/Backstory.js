import React from 'react';

import tweetGif from './tweet.gif';

const Backstory = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90%',
    }}
  >
    <ul>
      <li>Started as a standard React project</li>
      <li>Rebuilt using Gatsby and MDX</li>
      <li>Other teams at IBM wanted in</li>
    </ul>
    <img src={tweetGif} alt="carbon gatsby migration gif" />
  </div>
);

export default Backstory;
