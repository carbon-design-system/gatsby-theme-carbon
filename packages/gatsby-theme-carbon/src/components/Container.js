import React, { useContext } from 'react';
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
`;

const Container = ({ children, homepage }) => {
  const { leftNavIsOpen, switcherIsOpen, toggleNavState } = useContext(
    NavContext
  );
  const windowSize = useWindowSize();
  const closeNavs = () => {
    toggleNavState('leftNavIsOpen', 'close');
    toggleNavState('switcherIsOpen', 'close');
  };

  const shouldShowOverlay = () => {
    const navOpen = leftNavIsOpen || switcherIsOpen;
    return navOpen && windowSize.innerWidth && windowSize.innerWidth < 1056;
  };

  return (
    <>
      {shouldShowOverlay() ? <Overlay onClick={closeNavs} /> : null}
      <div className={`${homepage ? 'container--homepage' : 'container'}`}>
        {children}
      </div>
    </>
  );
};

export default Container;
