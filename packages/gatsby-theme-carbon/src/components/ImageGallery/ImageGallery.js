import React, { useState, useEffect, Children } from 'react';
import ReactDOM from 'react-dom';
import { ChevronRight32, ChevronLeft32, Close32 } from '@carbon/icons-react';
import FocusTrap from 'focus-trap-react';
import {
  galleryContainer,
  buttonClass,
  closeButton,
  icon,
  galleryMenu,
  imageContainer,
} from './ImageGallery.module.scss';

function ImageGallery({ children }) {
  const [portalsNode, updateNode] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, updateActiveImageIndex] = useState(null);

  useEffect(() => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    updateNode(node);

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const childrenAsArray = Children.toArray(children);

  // Todo: create styling

  function openGalleryForImage(index) {
    return () => {
      setIsGalleryOpen(true);
      updateActiveImageIndex(index);
    };
  }

  function closeGallery() {
    setIsGalleryOpen(false);
    updateActiveImageIndex(null);
  }

  function selectNextImage() {
    if (activeImageIndex + 1 < childrenAsArray.length) {
      updateActiveImageIndex(activeImageIndex + 1);
    }
  }

  function selectPrevImage() {
    if (activeImageIndex - 1 >= 0) {
      updateActiveImageIndex(activeImageIndex - 1);
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      closeGallery();
      return;
    }

    if (event.key === 'ArrowLeft') {
      selectPrevImage();
      return;
    }

    if (event.key === 'ArrowRight') {
      selectNextImage();
    }
  }

  return (
    <>
      <div>
        {Children.map(children, (child, index) => (
          // eslint-disable jsx-a11y/no-static-element-interactions
          // eslint-disable jsx-a11y/no-noninteractive-element-interactions
          <div
            role="group"
            onKeyDown={openGalleryForImage(index)}
            onClick={openGalleryForImage(index)}
          >
            {child}
          </div>
        ))}
        {portalsNode &&
          isGalleryOpen &&
          ReactDOM.createPortal(
            <FocusTrap>
              {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
              <div
                className={galleryContainer}
                role="group"
                onKeyDown={onKeyDown}
              >
                <div className={closeButton}>
                  <button
                    type="button"
                    className={buttonClass}
                    onClick={closeGallery}
                  >
                    <Close32 className={icon} />
                  </button>
                </div>
                <div className={galleryMenu}>
                  {activeImageIndex - 1 >= 0 && (
                    <button
                      type="button"
                      className={buttonClass}
                      onClick={selectPrevImage}
                    >
                      <ChevronLeft32 className={icon} />
                    </button>
                  )}
                  <div className={imageContainer}>
                    {childrenAsArray[activeImageIndex]}
                  </div>
                  {activeImageIndex + 1 < childrenAsArray.length && (
                    <button
                      type="button"
                      className={buttonClass}
                      onClick={selectNextImage}
                    >
                      <ChevronRight32 className={icon} />
                    </button>
                  )}
                </div>
              </div>
            </FocusTrap>,
            portalsNode
          )}
      </div>
    </>
  );
}

export default ImageGallery;
