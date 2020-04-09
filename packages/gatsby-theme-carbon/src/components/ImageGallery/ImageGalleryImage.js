import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../Grid';
import {
  imageButtonWrapper,
  imageTitle,
  imageInDialog,
  figure,
} from './ImageGalleryImage.module.scss';

function ImageGalleryImage({
  title,
  alt,
  col,
  isInDialog = false,
  children,
  ...rest
}) {
  if (isInDialog) {
    return (
      <>
        <h3 className={imageTitle}>{title}</h3>
        <div className={imageInDialog}>{children}</div>
      </>
    );
  }

  return (
    <Column colLg={col}>
      <figure className={figure} role="group" aria-label={alt}>
        <button className={imageButtonWrapper} type="button" {...rest}>
          {children}
        </button>
      </figure>
    </Column>
  );
}

ImageGalleryImage.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  col: PropTypes.number,
  isInDialog: PropTypes.bool,
  children: PropTypes.object,
};

export default ImageGalleryImage;
