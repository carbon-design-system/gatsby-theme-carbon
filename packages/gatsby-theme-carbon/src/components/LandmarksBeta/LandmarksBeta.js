import React from 'react';

const LandmarksBeta = ({ children }) => {
  const main = document.querySelectorAll('[role="main"]');
  console.log(main);

  return <div className="landmark-wrapper">{children}</div>;
};

export default LandmarksBeta;
