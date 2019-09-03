import React, { useEffect, createContext, useContext } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { list, link, description, active } from './GlobalSearch.module.scss';

export const MenuContext = createContext();

const Menu = ({ results, onKeyDown }) => {
  const { optionsRef } = useContext(MenuContext);

  // clear the options list every render so it will always be fresh
  useEffect(() => {
    optionsRef.current = [];
    return () => (optionsRef.current = []);
  });

  return (
    <>
      <ul
        aria-labelledby="search-label"
        role="menu"
        id="search-menu"
        className={list}
      >
        {results.map((page, index) => (
          <MenuItem
            id={`menu-item-${index}`}
            onKeyDown={onKeyDown}
            key={page.path}
            index={index}
            page={page}
          />
        ))}
      </ul>
    </>
  );
};

const MenuItem = ({ page, index, onKeyDown, id }) => {
  const { optionsRef, focusedItem } = useContext(MenuContext);

  useEffect(() => {
    optionsRef.current.push(page.path);
  });

  const className = cx(link, {
    [active]: focusedItem === index,
  });

  return (
    <li role="none" key={page.path}>
      <Link
        onKeyDown={onKeyDown}
        tabIndex="-1"
        id={id}
        role="menuitem"
        className={className}
        to={page.path}
      >
        {`${page.title} – `}
        <span className={description}>
          {page.description && page.description.toLowerCase()}
        </span>
      </Link>
    </li>
  );
};

export default Menu;
