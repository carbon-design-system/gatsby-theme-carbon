// import '../polyfills';
import React from 'react';

import { FourOhFour, WebsiteBackToTopBtn } from '@carbon/addons-website';
import Layout from '../components/PageLayout';
import EditLink from '../components/EditLink';

// Components
import PageHeader from '../components/PageHeader';
import PageTabs from '../components/PageTabs';
import NextPrevious from '../components/NextPrevious';

import {
  HomepageFooter,
  HomepageHeader,
} from '../components/Homepage/Homepage.js';

const Page = props => {
  const slug = props.location.pathname;
  const { frontmatter } = props.pageContext;
  const { tabs } = frontmatter;
  const { hidden } = frontmatter;
  const { title } = frontmatter;

  const currentTab = slug.split('/').slice(-1)[0];

  const { GATSBY_CARBON_ENV } = process.env;
  const isInternal = GATSBY_CARBON_ENV !== 'internal' && hidden;
  const homepage = title === 'Homepage';

  if (isInternal) {
    return (
      <Layout>
        <FourOhFour />
      </Layout>
    );
  }
  if (homepage) {
    if (typeof document !== 'undefined') {
      document.body.style.background = '#282828';
    }

    return (
      <Layout>
        <div className="container--homepage">
          <HomepageHeader />
          <main className="page-content ibm--grid" id="maincontent" />
          <HomepageFooter />
        </div>
        <WebsiteBackToTopBtn />
      </Layout>
    );
  }
  if (typeof document !== 'undefined') {
    document.body.style.background = '#f3f3f3';
  }

  return (
    <Layout>
      <PageHeader title={title} label="label">
        {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
      </PageHeader>
      <main
        style={{ paddingTop: '80px' }}
        className="page-content ibm--grid"
        id="maincontent"
      >
        {props.children}
        <EditLink slug={slug} />
      </main>
      <NextPrevious slug={slug} currentTabs={tabs} currentPage={currentTab} />
      <WebsiteBackToTopBtn />
    </Layout>
  );
};

export default Page;
