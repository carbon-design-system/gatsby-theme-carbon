/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';

import { Information } from '@carbon/icons-react';

import Meta from 'gatsby-theme-carbon/src/components/Meta';
import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Header from 'gatsby-theme-carbon/src/components/Header';
import { Switcher } from 'gatsby-theme-carbon/src/components/Switcher';
import Container from 'gatsby-theme-carbon/src/components/Container';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import Footer from './Footer';

import 'gatsby-theme-carbon/src/styles/index.scss';
import {
  layout,
  banner,
  bannerText,
  bannerIcon,
} from '../../styles/Layout.module.scss';

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
    <div className={layout}>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <div className={banner} role="contentinfo">
        <span className={bannerText}>
          <Information size={16} className={bannerIcon} /> This project is
          maintained by community contributions. The original contributor,
          Carbon Design System, is no longer involved in maintaining this
          project.
        </span>
      </div>
      <Header isSwitcherEnabled={isSwitcherEnabled} />
      {isSwitcherEnabled && <Switcher />}
      <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
