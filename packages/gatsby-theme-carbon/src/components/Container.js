import React, { useContext, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import NavContext from '../util/context/NavContext';
import useWindowSize from '../util/hooks/useWindowSize';

const Overlay = styled.div`
  z-index: 8000; /* z('overlay') */
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  transition: all 0.15s ease;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 150ms ease;
`;

const Container = ({ children, homepage }) => {
  const { leftNavIsOpen, switcherIsOpen, toggleNavState } = useContext(
    NavContext
  );
  const windowSize = useWindowSize();
  const lastWindowSize = useRef(windowSize);

  const closeNavs = useCallback(() => {
    toggleNavState('leftNavIsOpen', 'close');
    toggleNavState('switcherIsOpen', 'close');
  }, [toggleNavState]);

  useEffect(() => {
    const windowShrinking =
      lastWindowSize.current &&
      lastWindowSize.current.innerWidth > windowSize.innerWidth;
    if (windowShrinking && windowSize.innerWidth < 1056) {
      closeNavs();
    }
    lastWindowSize.current = windowSize;
  }, [closeNavs, windowSize, windowSize.innerWidth]);

  const overlayVisible = (() => {
    const navOpen = leftNavIsOpen || switcherIsOpen;
    return navOpen && windowSize.innerWidth && windowSize.innerWidth < 1056;
  })();

  return (
    <>
      <Overlay visible={overlayVisible} onClick={closeNavs} />
      <div
        aria-hidden={overlayVisible}
        className={`${homepage ? 'container--homepage' : 'container'}`}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
