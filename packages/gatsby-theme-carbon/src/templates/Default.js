import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
// import EditLink from '../components/EditLink';
import NextPrevious from '../components/NextPrevious';
import PageTabs from '../components/PageTabs';
import Main from '../components/Main';

const Default = ({ pageContext, children, location }) => {
  const { frontmatter = {} } = pageContext;
  const { tabs, title } = frontmatter;
  const slug = location.pathname;
  const currentTab = slug.split('/').slice(-1)[0];
  return (
    <Layout homepage={false}>
      <PageHeader title={title} label="label">
        {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
      </PageHeader>
      <Main padded>{children}</Main>
      <NextPrevious
        pageContext={pageContext}
        location={location}
        slug={slug}
        tabs={tabs}
        currentTab={currentTab}
      />
      <WebsiteBackToTopBtn />
    </Layout>
  );
};

export default Default;
