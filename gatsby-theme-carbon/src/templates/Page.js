import React from 'react';
import Home from './Home';
import Default from './Default';

const Page = props => {
  const slug = props.location.pathname;
  const {
    frontmatter: { tabs, title },
  } = props.pageContext;

  const currentTab = slug.split('/').slice(-1)[0];

  return slug === '/' ? (
    <Home />
  ) : (
    <Default title={title} slug={slug} tabs={tabs} currentTab={currentTab}>
      {props.children}
    </Default>
  );
};

export default Page;
