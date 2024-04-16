// Gatsby doesn't include the recommended exceptions to this rule
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md#rule-details

import React, { useEffect, createContext, useContext } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import {
  list,
  link,
  description,
  active,
  hidden,
  tab,
} from './GlobalSearch.module.scss';

export const MenuContext = createContext();

const Menu = ({ results, onKeyDown }) => {
  const { optionsRef } = useContext(MenuContext);

  // clear the options list every render so it will always be fresh
  useEffect(() => {
    optionsRef.current = [];
    return () => (optionsRef.current = []);
  });

  // Results must at least have a title to show up in the list
  const filteredResults = results.filter((result) => result.title);

  // In the event two pages have the same title, we need to add a tab to distinguish them in the results list
  const resultsWithTabAdded = filteredResults.map((result) => {
    const matchingResults = filteredResults.filter(
      (otherResult) => otherResult.title === result.title
    );
    if (matchingResults.length > 1) {
      return {
        ...result,
        tab: result.path
          .split('/')
          .filter(Boolean) // handles empty strings from trailing slash in path
          .pop(),
      };
    }
    return result;
  });

  return (
    <ul
      aria-labelledby="search-label"
      role="menu"
      id="search-menu"
      className={cx(list, {
        [hidden]: results.length === 0,
      })}>
      {resultsWithTabAdded.map((page, index) => (
        <MenuItem
          id={`menu-item-${index}`}
          onKeyDown={onKeyDown}
          key={page.path}
          index={index}
          page={page}
        />
      ))}
    </ul>
  );
};

const MenuItem = ({ page, index, onKeyDown, id }) => {
  const { optionsRef, focusedItem, clearAndClose } = useContext(MenuContext);

  useEffect(() => {
    optionsRef.current.push(page.path);
  });

  const className = cx(link, {
    [active]: focusedItem === index,
  });

  function convertFilePathToUrl(filePath) {
    // Find the index of the last occurrence of '/pages/'
    const pagesIndex = filePath.lastIndexOf('/pages/');

    if (pagesIndex === -1) {
      // '/pages/' not found in the filePath
      return null; // or handle this case as needed
    }

    // Extract the part of the path after '/pages/'
    const relativePath = filePath.substring(pagesIndex + '/pages/'.length);

    // Remove the file extension (.mdx in this case)
    const fileName = relativePath.replace('.mdx', '');

    // Replace directory separators with URL-friendly separators
    const urlPath = '/' + fileName.split('/').join('/') + '/';

    return urlPath;
  }

  const url = convertFilePathToUrl(page.path);

  return (
    <li role="none" key={page.id}>
      <Link
        onClick={clearAndClose}
        onKeyDown={onKeyDown}
        tabIndex="-1"
        id={id}
        role="menuitem"
        className={className}
        to={url}>
        {page.title}&nbsp;
        {page.tab && <span className={tab}>→ {page.tab} </span>}
        {page.description && (
          <span className={description}>– {page.description}</span>
        )}
      </Link>
    </li>
  );
};

export default Menu;
