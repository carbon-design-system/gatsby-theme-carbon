import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../Grid';
import {
  imageButtonWrapper,
  imageTitle,
  imageInDialog,
} from './ImageGalleryImage.module.scss';

function ImageGalleryImage({
  src,
  title,
  alt,
  colMd,
  colLg,
  isInDialog = false,
  ...rest
}) {
  if (isInDialog) {
    return (
      <>
        <h3 className={imageTitle}>{title}</h3>
        <div className={imageInDialog}>
          <img src={src} title={title} alt={alt} {...rest} />
        </div>
      </>
    );
  }

  return (
    <Column colMd={colMd} colLg={colLg}>
      <button className={imageButtonWrapper} type="button" {...rest}>
        <img src={src} title={title} alt={alt} />
      </button>
    </Column>
  );
}

ImageGalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  colMd: PropTypes.number,
  colLg: PropTypes.number,
  isInDialog: PropTypes.bool,
};

export default ImageGalleryImage;
