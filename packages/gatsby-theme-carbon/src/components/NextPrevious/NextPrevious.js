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
      node.pages.map(page => ({ ...page, category: node.title }))
    ),
    pathPrefix,
  ];
};

const getTabItems = ({ currentTitle, tabs }) => {
  if (!tabs) {
    return {
      prevTabItem: null,
      nextTabItem: null,
    };
  }

  const tabItems = tabs.map(title => {
    const slug = slugify(title, { lower: true });
    return {
      title,
      slug,
      currentTab: slug === slugify(currentTitle, { lower: true }),
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
  const { tabs, location, pageContext = { frontmatter: 'Home' } } = props;
  const [navigationList] = useNavigationList();
  const currentTitle = getTitle(pageContext);

  const { prevTabItem, nextTabItem } = getTabItems({
    currentTitle,
    tabs,
  });

  const { prevCategory, nextCategory, navIndex } = useNavigationItems({
    location,
    tabs,
  });

  const getPreviousItem = () => {
    if (prevTabItem) {
      return {
        to: `${location.pathname.replace(currentTitle, prevTabItem.slug)}`,
        name: getName(navigationList[navIndex].title, prevTabItem.title),
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
      return {
        to: `${location.pathname.replace(currentTitle, nextTabItem.slug)}`,
        name: getName(navigationList[navIndex].title, nextTabItem.title),
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

  const previousItem = getPreviousItem();
  const nextItem = getNextItem();

  return <NextPrevious previousItem={previousItem} nextItem={nextItem} />;
};

export default NextPreviousContainer;
