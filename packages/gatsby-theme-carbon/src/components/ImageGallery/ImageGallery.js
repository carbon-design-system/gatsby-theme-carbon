import React, { useState, useEffect, Children } from 'react';
import ReactDOM from 'react-dom';
import { breakpoints } from '@carbon/elements';
import { ChevronRight32, ChevronLeft32, Close32 } from '@carbon/icons-react';
import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import useMedia from 'use-media';
import PropTypes from 'prop-types';
import { Grid, Row, Column } from '../Grid';
import {
  galleryContainer,
  galleryGrid,
  galleryRow,
  navButtons,
  closeButton,
  icon,
  navButtonsContainer,
  firstRightNav,
  rightNav,
  leftNav,
  addNoScroll,
} from './ImageGallery.module.scss';

function ImageGallery({ children }) {
  const [portalsNode, updateNode] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, updateActiveImageIndex] = useState(null);
  const childrenAsArray = Children.toArray(children);
  const rightNavButton = cx({
    [rightNav]: true,
    [firstRightNav]: activeImageIndex === 0,
    [navButtons]: activeImageIndex > 0,
  });
  const leftNavButton = cx([leftNav], [navButtons]);
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.classList.add(addNoScroll);
    }

    return () => {
      document.body.classList.remove(addNoScroll);
    };
  }, [isGalleryOpen]);

  useEffect(() => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    updateNode(node);

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

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
      {Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onClick: openGalleryForImage(index),
        })
      )}
      {portalsNode &&
        isGalleryOpen &&
        !isMobile &&
        ReactDOM.createPortal(
          <FocusTrap>
            {/* Because of FocusTrap, the key down events will propagate up removing the accessibility problem that would be created by having a keydown event listener on a non-interactive element. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <div
              role="group"
              className={galleryContainer}
              onKeyDown={onKeyDown}
            >
              <Row>
                <Column colLg={2}>
                  <button
                    type="button"
                    className={closeButton}
                    onClick={closeGallery}
                  >
                    <Close32 className={icon} />
                  </button>
                </Column>
              </Row>
              <Grid className={galleryGrid}>
                <Row className={galleryRow}>
                  <Column colLg={3} colMd={2} className={navButtonsContainer}>
                    {activeImageIndex - 1 >= 0 && (
                      <button
                        type="button"
                        className={leftNavButton}
                        onClick={selectPrevImage}
                      >
                        <ChevronLeft32 className={icon} />
                      </button>
                    )}
                  </Column>
                  <Column colLg={6} colMd={4}>
                    {React.cloneElement(childrenAsArray[activeImageIndex], {
                      isInDialog: true,
                    })}
                  </Column>
                  <Column colLg={3} colMd={2} className={navButtonsContainer}>
                    {activeImageIndex + 1 < childrenAsArray.length && (
                      <button
                        type="button"
                        className={rightNavButton}
                        onClick={selectNextImage}
                      >
                        <ChevronRight32 className={icon} />
                      </button>
                    )}
                  </Column>
                </Row>
              </Grid>
            </div>
          </FocusTrap>,
          portalsNode
        )}
    </>
  );
}

ImageGallery.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ImageGallery;
