import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import slugify from 'slugify';
import { useStaticQuery, graphql } from 'gatsby';

import { useScrollDirection } from '../util/hooks';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
// import EditLink from '../components/EditLink';
import NextPrevious from '../components/NextPrevious';
import PageTabs from '../components/PageTabs';
import Main from '../components/Main';

const Default = ({ pageContext, children, location }) => {
  const { frontmatter = {} } = pageContext;
  const { tabs, title } = frontmatter;
  const scrollDirection = useScrollDirection();
  const shouldHideHeader = !!tabs && scrollDirection === 'down';

  // get the path prefix if it exists
  const {
    site: { pathPrefix },
  } = useStaticQuery(graphql`
    query PATH_PREFIX_QUERY {
      site {
        pathPrefix
      }
    }
  `);

  // let gatsby handle prefixing
  const slug = pathPrefix
    ? location.pathname.replace(pathPrefix, '')
    : location.pathname;

  const getCurrentTab = () => {
    if (!tabs) return '';
    return slug.split('/').slice(-1)[0] || slugify(tabs[0], { lower: true });
  };

  const currentTab = getCurrentTab();
  return (
    <Layout shouldHideHeader={shouldHideHeader} homepage={false}>
      <PageHeader
        shouldHideHeader={shouldHideHeader}
        title={title}
        label="label"
        tabs={tabs}
      >
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
