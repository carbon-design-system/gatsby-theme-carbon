import React from 'react';
import { Column } from '../Grid';
// import { ChevronRight32, ChevronLeft32, Close32 } from '@carbon/icons-react';
// import { container } from './ImageWrapper.module.scss';

function ImageWrapper({
  src,
  title,
  alt,
  colMd,
  colLg,
  isInDialog = false,
  ...rest
}) {
  if (isInDialog) {
    return <img src={src} title={title} alt={alt} {...rest} />;
  }

  return (
    <Column colMd={colMd} colLg={colLg}>
      <button type="button" {...rest}>
        ![{alt}]({src})
      </button>
    </Column>
  );
}

export default ImageWrapper;
