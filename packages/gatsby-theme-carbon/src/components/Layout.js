/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect, useEffect, useState } from 'react';

import Meta from './Meta';
import HeaderNav from './HeaderNav';
import LeftNav from './LeftNav';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import Container from './Container';

import '../styles/index.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  const is404 = children.key === null;

  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = (event) => {
    console.log('heh', event);
    setWindowSize(event.target.window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  if (windowSize <= 1056) {
    return (
      <>
        {console.log('ndkd')}
        <Meta
          titleType={titleType}
          pageTitle={pageTitle}
          pageDescription={pageDescription}
          pageKeywords={pageKeywords}
        />
        <Header />
        <Switcher />
        <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
        <Container homepage={homepage} theme={theme}>
          {children}
          <Footer />
        </Container>
      </>
    );
  }
  return (
    <>
      {console.log('nddddjjjjdddkd')}

      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <HeaderNav homepage={homepage} is404Page={is404} theme={theme} />
      <Switcher />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
