import React from 'react';

import LeftNav from './LeftNav';
import Meta from './Meta';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import MDXProvider from './MDXProvider';

import { useSmoothScroll, useDocSearch } from '../util/hooks';

// import favicon32 from '../../content/global/images/favicon-32.png';

import '../styles/index.scss';

const Layout = ({ children, ...rest }) => {
  useSmoothScroll();
  useDocSearch();

  const is404 = children.key === null;

  return (
    <>
      <Meta />
      <Header />
      <Switcher />
      <LeftNav homepage={rest.homepage} is404Page={is404} />
      <div className="container">
        <MDXProvider>{children}</MDXProvider>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
