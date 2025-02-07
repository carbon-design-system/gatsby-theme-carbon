import React, { useContext, useEffect, useRef, useCallback } from 'react';
import cx from 'classnames';
import NavContext from '../../util/context/NavContext';
import useWindowSize from '../../util/hooks/useWindowSize';
import useMetadata from '../../util/hooks/useMetadata';
import { overlay, visible } from './Container.module.scss';

const Container = ({ children, homepage, theme }) => {
  const { leftNavIsOpen, switcherIsOpen, toggleNavState } =
    useContext(NavContext);
  const windowSize = useWindowSize();
  const lastWindowSize = useRef(windowSize);
  const { navigationStyle } = useMetadata();

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

  const containerClassNames = cx('container', {
    'container--homepage': homepage,
    'container--dark': theme === 'dark',
    'container--white': theme === 'white',
    'container--g10': theme === 'g10',
    'container--header--nav': navigationStyle,
  });

  return (
    <>
      <span hidden id="overlay-label">
        Collapse navigation items
      </span>
      <div
        role="button"
        aria-labelledby="overlay-label"
        tabIndex="0"
        className={cx(overlay, { [visible]: overlayVisible })}
        onClick={closeNavs}
        onKeyPress={closeNavs}
      />
      <main
        id="main-content"
        aria-hidden={overlayVisible}
        className={containerClassNames}>
        {children}
      </main>
    </>
  );
};

export default Container;
