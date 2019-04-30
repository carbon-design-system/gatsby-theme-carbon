import React, { useContext } from 'react';
import styled from '@emotion/styled';
import NavContext from '../util/context/NavContext';

const Overlay = styled.div`
  z-index: 500;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  transition: all 0.15s ease;
`;

const Container = ({ children }) => {
  const { leftNavIsOpen, switcherIsOpen, toggleNavState } = useContext(
    NavContext
  );
  const closeNavs = () => {
    toggleNavState('leftNavIsOpen', 'close');
    toggleNavState('switcherIsOpen', 'close');
  };

  return (
    <>
      {leftNavIsOpen || switcherIsOpen ? <Overlay onClick={closeNavs} /> : null}
      <div className="container">{children}</div>
    </>
  );
};

export default Container;
