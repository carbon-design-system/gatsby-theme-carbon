import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/tag';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';

import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20';
import AppSwitcher20 from '@carbon/icons-react/es/app-switcher/20';
import Close20 from '@carbon/icons-react/es/close/20';
import Information20 from '@carbon/icons-react/es/information/20';

import {
  WebsiteFooter,
  WebsiteSwitcher,
  WebsiteCodeSnippet,
} from '@carbon/addons-website';

// import timestamp from 'raw-loader!../../../build-timestamp';
import Packages from '../../package.json';
import GlobalSearch from './GlobalSearch';
import LeftNav from './LeftNav';
import Meta from './Meta';

import { useSmoothScroll, useDocSearch } from '../util/hooks';

// import favicon32 from '../../content/global/images/favicon-32.png';
import NavContext from '../util/context/NavContext';

import PageTable from './PageTable';

import { P, H1, H2, H3, H4, H5, Ul, Ol } from './markdown';

import '../styles/index.scss';

const PageLayout = ({ children }) => {
  const { openState, toggleNav } = useContext(NavContext);
  useSmoothScroll();
  useDocSearch();

  const { GATSBY_CARBON_ENV } = process.env;
  const isInternal = GATSBY_CARBON_ENV === 'internal';
  const version = Packages.dependencies['carbon-components'];
  const reactVersion = Packages.dependencies['carbon-components-react'];
  const currentYear = new Date().getFullYear();
  // const lastUpdated = new Intl.DateTimeFormat(undefined, {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // }).format(new Date(Number(timestamp)));

  const is404 = children.key === null;

  return (
    <>
      <Meta />
      <aside aria-label="alert banner" className="website-alert">
        <Information20 className="website-alert__icon" />
        <p className="website-alert__text">
          <span>Carbon v10 is live!</span>
          <span /> <span>View the migration guide to upgrade from v9.</span>
        </p>
        <Link
          className="website-alert__button"
          tabIndex="-1"
          to="/updates/v10-migration/overview"
        >
          <button
            className="bx--btn bx--btn--secondary bx--btn--sm"
            type="button"
          >
            <span>Migrate to v10</span>
            <ArrowRight20 />
          </button>
        </Link>
      </aside>
      <Header aria-label="Header" className="bx--header--website">
        <SkipToContent />
        <HeaderMenuButton
          className="bx--header__action--menu"
          aria-label="Open menu"
          onClick={() => toggleNav('leftNav')}
          isActive={openState.leftNav}
        />
        {isInternal ? (
          <HeaderName prefix="" to="/" element={Link}>
            Carbon&nbsp;<span>Design System</span>
          </HeaderName>
        ) : (
          <HeaderName prefix="" to="/" element={Link}>
            Carbon&nbsp;<span>Design System</span>
          </HeaderName>
        )}
        <HeaderGlobalBar>
          <GlobalSearch />
          <HeaderGlobalAction
            className="bx--header__action--switcher"
            aria-label="Switch"
            onClick={() => {
              toggleNav('switcher');
              toggleNav('search', 'close');
            }}
          >
            {openState.switcher ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      <WebsiteSwitcher
        isSwitcherFinal={openState.switcher}
        isSwitcherOpen={openState.switcher}
        links={[
          { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
          {
            href: 'https://www.ibm.com/design/language/',
            linkText: 'IBM Design Language',
          },
          {
            href: 'https://www.carbondesignsystem.com',
            linkText: 'IBM Product Design',
          },
          {
            href: 'https://www.ibm.com/standards/web/',
            linkText: 'IBM Digital Design',
          },
          {
            href: 'https://www.ibm.com/design/research/',
            linkText: 'IBM Design Research',
          },
          {
            href: 'https://www.ibm.com/design/thinking/',
            linkText: 'Enterprise Design Thinking',
          },
          {
            href: 'https://www.ibm.com/services/ibmix/',
            linkText: 'IBM iX',
          },
        ]}
      />
      <LeftNav is404Page={is404} />
      <div className="container">
        <MDXProvider
          components={{
            // Map HTML element tag to React component
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
        <WebsiteFooter
          logoOffset
          linksCol1={[
            { href: '/contributing/designers', linkText: 'Contribute' },
            { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
            {
              href: 'https://www.ibm.com/legal',
              linkText: 'Terms of Use',
            },
            { href: 'https://www.ibm.com', linkText: 'IBM.com' },
          ]}
          linksCol2={[
            {
              href: 'https://dribbble.com/_carbondesign',
              linkText: 'Dribbble',
            },
            {
              href: 'https://medium.com/@_carbondesign',
              linkText: 'Medium',
            },
            {
              href: 'https://twitter.com/_carbondesign',
              linkText: 'Twitter',
            },
          ]}
        >
          <p>
            Have questions? Email us or open
            <br /> an issue in{' '}
            <a href="https://github.com/carbon-design-system/carbon-website/issues/new/choose">
              GitHub.
            </a>
          </p>
          <p>
            Vanilla Components version {version}
            <br />
            React Components version {reactVersion}
            <br />
            {/* Last updated {lastUpdated} */}
            <br />
            Copyright © {currentYear} IBM
          </p>
        </WebsiteFooter>
      </div>
    </>
  );
};

export default PageLayout;
