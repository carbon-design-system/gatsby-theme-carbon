import React from 'react';

import LeftNav from './LeftNav';
import Meta from './Meta';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import Container from './Container';
import useHashLink from '../util/hooks/useHashLink';

import '../styles/index.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  hasTabs,
}) => {
  const is404 = children.key === null;
  useHashLink(hasTabs);

  return (
    <>
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
};

export default Layout;
