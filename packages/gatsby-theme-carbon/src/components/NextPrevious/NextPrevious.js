import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import slugify from 'slugify';

import NextPrevious from './NextPreviousStyles';

const useNavigationList = () => {
  const {
    allNavItemsYaml: { edges },
    site: { pathPrefix },
  } = useStaticQuery(graphql`
    query NAV_ITEM_QUERY {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
            }
          }
        }
      }
      site {
        pathPrefix
      }
    }
  `);

  return [
    edges.flatMap(({ node }) =>
      node.pages.map(page => ({
        ...page,
        category: node.title,
      }))
    ),
    pathPrefix,
  ];
};

const getTabItems = ({ tabs, location }) => {
  const { pathname } = location;
  const currentPage = pathname.split('/');
  if (!tabs) {
    return {
      prevTabItem: null,
      nextTabItem: null,
    };
  }

  const tabItems = tabs.map(title => {
    const slug = slugify(title, {
      lower: true,
    });
    const currentTab =
      currentPage.filter(item => item === slug).toString() === slug;
    return {
      title,
      slug,
      currentTab,
    };
  });

  const currentTabIndex = tabItems.findIndex(tab => tab.currentTab);
  return {
    prevTabItem: tabItems[currentTabIndex - 1],
    nextTabItem: tabItems[currentTabIndex + 1],
  };
};

const useNavigationItems = ({ tabs, location }) => {
  const [navigationList, pathPrefix] = useNavigationList();
  const { pathname } = location;
  const unPrefixedPathname = pathname.replace(pathPrefix, '');
  const currentNavigationItem = tabs
    ? unPrefixedPathname.replace(/\/[^/]*\/?$/, '') // removes the last url segment
    : unPrefixedPathname.replace(/\/$/, ''); // removes the last syalash

  const navIndex = navigationList.findIndex(item =>
    item.path.includes(currentNavigationItem)
  );

  return {
    prevCategory: navigationList[navIndex - 1],
    nextCategory: navigationList[navIndex + 1],
    navIndex,
  };
};

const getTitle = pageContext => {
  if (!pageContext.frontmatter.title) {
    return 'Home';
  }
  return slugify(pageContext.frontmatter.title, {
    lower: true,
  });
};

const getName = (category, title) => `${category}${title ? `: ${title}` : ''}`;

const NextPreviousContainer = props => {
  const {
    tabs,
    location,
    pageContext = {
      frontmatter: 'Home',
    },
  } = props;
  const [navigationList, pathPrefix] = useNavigationList();
  const currentTitle = getTitle(pageContext);
  const hrefSegments = location.pathname
    .replace(pathPrefix, '')
    .split('/')
    .filter(Boolean);

  const { prevTabItem, nextTabItem } = getTabItems({
    currentTitle,
    location,
    tabs,
  });

  const { prevCategory, nextCategory, navIndex } = useNavigationItems({
    location,
    tabs,
  });

  const getPreviousItem = () => {
    if (prevTabItem) {
      const previousSegments = [...hrefSegments.slice(0, -1), prevTabItem.slug];
      return {
        // Join the link back together
        to: `/${previousSegments.join('/')}`,
        name: getName(
          navigationList[navIndex].title || navigationList[navIndex].category,
          prevTabItem.title
        ),
      };
    }

    if (prevCategory) {
      return {
        to: prevCategory.path,
        name: getName(prevCategory.category, prevCategory.title),
      };
    }

    return currentTitle === 'Home'
      ? {}
      : {
          to: '/',
          name: 'Home',
        };
  };

  const getNextItem = () => {
    if (currentTitle === 'Home') {
      return {
        to: navigationList[navIndex].path,
        name: getName(
          navigationList[navIndex].category,
          navigationList[navIndex].title
        ),
      };
    }

    if (nextTabItem && nextTabItem.slug) {
      const nextSegments = [...hrefSegments.slice(0, -1), nextTabItem.slug];
      return {
        to: `/${nextSegments.join('/')}`,
        name: getName(
          navigationList[navIndex].title || navigationList[navIndex].category,
          nextTabItem.title
        ),
      };
    }

    if (nextCategory) {
      return {
        to: nextCategory.path,
        name: getName(nextCategory.category, nextCategory.title),
      };
    }

    return {}; // final page
  };

  if (currentTitle !== 'Home' && !navigationList[navIndex]) {
    return null;
  }

  return (
    <NextPrevious previousItem={getPreviousItem()} nextItem={getNextItem()} />
  );
};

export default NextPreviousContainer;
