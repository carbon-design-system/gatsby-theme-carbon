import React from 'react';

import LeftNav from './LeftNav';
import Meta from './Meta';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import MDXProvider from './MDXProvider';
import Container from './Container';
import { useSmoothScroll } from '../util/hooks';

import '../styles/index.scss';

const Layout = ({ children, ...rest }) => {
  useSmoothScroll();

  const is404 = children.key === null;

  return (
    <>
      <Meta />
      <Header />
      <Switcher />
      <LeftNav homepage={rest.homepage} is404Page={is404} />
      <Container>
        <MDXProvider>{children}</MDXProvider>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
