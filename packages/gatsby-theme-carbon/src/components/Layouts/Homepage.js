import React from 'react';
import Layout from '../Layout';
import Main from '../Main';
import useMetadata from '../../util/hooks/useMetadata';
import Utils from '../Utils';

import NextPrevious from '../NextPrevious';

const Homepage = ({
  children,
  Banner,
  FirstCallout,
  SecondCallout,
  location,
  pageContext,
}) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords } = frontmatter;
  const { homepageTheme } = useMetadata();

  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      homepage
      theme={homepageTheme}>
      {Banner}
      {FirstCallout}
      <Main>{children}</Main>
      {SecondCallout}
      <NextPrevious isHomepage location={location} pageContext={pageContext} />
      <Utils />
    </Layout>
  );
};

export default Homepage;
