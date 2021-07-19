/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';

import Meta from './Meta';
import LeftNav from './LeftNav';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import Container from './Container';
import useMetadata from '../util/hooks/useMetadata';

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
  const { isSwitcherEnabled } = useMetadata();

  useEffect(() => {
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

  return (
    <>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <Header isSwitcherEnabled={isSwitcherEnabled} />
      {isSwitcherEnabled && <Switcher />}
      <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
