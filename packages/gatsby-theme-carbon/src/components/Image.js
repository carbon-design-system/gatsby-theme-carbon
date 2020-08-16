import React from 'react';

const Image = ({ src, alt }) => {
  console.log({ src, alt });
  return <img src={src} alt={alt} />;
};
