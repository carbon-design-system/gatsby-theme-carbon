import React from 'react';
import slugify from 'slugify';
import { useStaticQuery, graphql } from 'gatsby';
import { breakpoints } from '@carbon/elements';
import useMedia from 'use-media';

import { useScrollDirection } from '../util/hooks';

import BackToTopBtn from '../components/BackToTopBtn';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import EditLink from '../components/EditLink';
import NextPrevious from '../components/NextPrevious';
import PageTabs from '../components/PageTabs';
import Main from '../components/Main';

const Default = ({ pageContext, children, location }) => {
  const { frontmatter = {}, relativePagePath, titleType } = pageContext;
  const { tabs, title, theme, description, keywords } = frontmatter;
  const scrollDirection = useScrollDirection();
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });
  const shouldHideHeader = isMobile && tabs && scrollDirection === 'down';

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
    <Layout
      shouldHideHeader={shouldHideHeader}
      homepage={false}
      theme={theme}
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
    >
      <PageHeader
        shouldHideHeader={shouldHideHeader}
        title={title}
        label="label"
        tabs={tabs}
      >
        {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
      </PageHeader>
      <Main padded>
        {children}
        <EditLink relativePagePath={relativePagePath} />
      </Main>
      <NextPrevious
        pageContext={pageContext}
        location={location}
        slug={slug}
        tabs={tabs}
        currentTab={currentTab}
      />
      <BackToTopBtn />
    </Layout>
  );
};

export default Default;
