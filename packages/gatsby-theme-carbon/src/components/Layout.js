import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import { WebsiteCodeSnippet } from '@carbon/addons-website';

import LeftNav from './LeftNav';
import Meta from './Meta';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';

import { useSmoothScroll, useDocSearch } from '../util/hooks';

// import favicon32 from '../../content/global/images/favicon-32.png';

import PageTable from './PageTable';

import { P, H1, H2, H3, H4, H5, Ul, Ol } from './markdown';

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
        <MDXProvider
          components={{
            p: P,
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            ul: Ul,
            ol: Ol,
            pre: WebsiteCodeSnippet,
            table: PageTable,
          }}
        >
          {children}
        </MDXProvider>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
