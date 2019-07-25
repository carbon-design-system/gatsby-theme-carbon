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
    return {
      title,
      slug,
      currentTab:
        slug ===
        slugify(currentPage[3], {
          lower: true,
        }),
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
    // Splitting the href into a array
    const hrefSegment = location.pathname.split('/');
    if (prevTabItem) {
      // Checking if the last segment is there
      // If last segment there the use that
      // Else use the one next one up
      const segmentLocation = hrefSegment[hrefSegment.length - 1]
        ? hrefSegment.length - 1
        : hrefSegment.length - 2;
      hrefSegment[segmentLocation] = prevTabItem.slug;
      return {
        // Join the link back together
        to: hrefSegment.join('/'),
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

    // Same as the previous Tab above
    const hrefSegment = location.pathname.split('/');
    if (nextTabItem && nextTabItem.slug) {
      const segmentIndex = hrefSegment[hrefSegment.length - 1]
        ? hrefSegment.length - 1
        : hrefSegment.length - 2;
      hrefSegment[segmentIndex] = nextTabItem.slug;
      return {
        to: hrefSegment.join('/'),
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
