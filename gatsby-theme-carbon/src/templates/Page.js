import React from 'react';
import { graphql } from 'gatsby';
import Home from './Home';
import Default from './Default';

const Page = props => {
  console.log(props);
  const slug = props.location.pathname;
  const {
    frontmatter: { tabs, title },
  } = props.pageContext;

  const currentTab = slug.split('/').slice(-1)[0];

  return slug === '/' ? (
    <Home {...props} />
  ) : (
    <Default
      {...props}
      title={title}
      slug={slug}
      tabs={tabs}
      currentTab={currentTab}
    >
      {props.children}
    </Default>
  );
};

export const pageQuery = graphql`
  query PAGE_QUERY {
    site {
      id
    }
  }
`;

export default Page;
