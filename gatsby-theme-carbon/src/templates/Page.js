import React from 'react';
import Home from './Home';
import Default from './Default';

const Page = props => {
  const slug = props.location.pathname;
  const currentTab = slug.split('/').slice(-1)[0];

  return slug === '/' ? (
    <Home {...props} />
  ) : (
    <Default slug={slug} currentTab={currentTab} {...props}>
      {props.children}
    </Default>
  );
};

export default Page;
