import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
// import EditLink from '../components/EditLink';
// import NextPrevious from '../components/NextPrevious';
import PageTabs from '../components/PageTabs';
import Main from '../components/Main';

const Default = ({ pathContext, children, location, ...rest }) => {
  const { frontmatter = {} } = pathContext;
  const { tabs, title } = frontmatter;
  const slug = location.pathname;
  const currentTab = slug.split('/').slice(-1)[0];
  return (
    <Layout homepage={false}>
      <PageHeader title={title} label="label">
        {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
      </PageHeader>
      <Main padded>{children}</Main>
      {/* <NextPrevious slug={slug} currentTabs={tabs} currentPage={currentTab} /> */}
      <WebsiteBackToTopBtn />
    </Layout>
  );
};

export default Default;
