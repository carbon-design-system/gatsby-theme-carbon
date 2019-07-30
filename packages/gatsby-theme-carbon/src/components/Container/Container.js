import React, { useContext, useEffect, useRef, useCallback } from 'react';
import cx from 'classnames';
import NavContext from '../../util/context/NavContext';
import useWindowSize from '../../util/hooks/useWindowSize';
import { overlay, visible } from './Container.module.scss';

const Container = ({ children, homepage, theme }) => {
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

  const classNames = cx({
    container: theme !== 'dark' || !homepage,
    'container--homepage': homepage,
    'container--dark': theme === 'dark',
  });

  return (
    <>
      <div
        className={cx(overlay, { [visible]: overlayVisible })}
        onClick={closeNavs}
        onKeyPress={closeNavs}
        role="presentation"
        tabIndex="-1"
      />
      <div aria-hidden={overlayVisible} className={classNames}>
        {children}
      </div>
    </>
  );
};

export default Container;
