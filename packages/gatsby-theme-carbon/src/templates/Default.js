import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
// import EditLink from '../components/EditLink';
import NextPrevious from '../components/NextPrevious';
import PageTabs from '../components/PageTabs';

const Default = ({ title, slug, tabs, currentTab, children }) => (
  <Layout>
    <PageHeader title={title} label="label">
      {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
    </PageHeader>
    <main
      style={{ paddingTop: '80px' }}
      className="page-content ibm--grid"
      id="maincontent"
    >
      {children}
    </main>
    <NextPrevious slug={slug} currentTabs={tabs} currentPage={currentTab} />
    <WebsiteBackToTopBtn />
  </Layout>
);

export default Default;
