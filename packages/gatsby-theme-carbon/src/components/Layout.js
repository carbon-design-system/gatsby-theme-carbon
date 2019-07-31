import React, { useLayoutEffect } from 'react';

import LeftNav from './LeftNav';
import Meta from './Meta';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import MDXProvider from './MDXProvider';
import Container from './Container';

import '../styles/index.scss';

const Layout = ({
  children,
  homepage,
  shouldHideHeader,
  pageTitle,
  ...rest
}) => {
  const is404 = children.key === null;

  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: 48,
    });
  }, []);

  return (
    <>
      <Meta title={pageTitle} />
      <Header shouldHideHeader={shouldHideHeader} />
      <Switcher />
      <LeftNav
        shouldHideHeader={shouldHideHeader}
        homepage={homepage}
        is404Page={is404}
      />
      <Container homepage={homepage}>
        <MDXProvider>{children}</MDXProvider>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
