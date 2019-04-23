import React, { useState, useReducer } from 'react';

const NavContext = React.createContext({
  leftNav: false,
  search: false,
  switcher: false,
  expandedCategories: [],
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { ...state, [action.nav]: true };
    case 'close':
      return { ...state, [action.nav]: false };
    default:
      return { ...state, [action.nav]: !state[action.nav] };
  }
};
export const NavContextProvider = ({ children }) => {
  const { leftNavIsOpen, searchIsOpen, switcherIsOpen, dispatch } = useReducer(
    reducer,
    {
      leftNav: false,
      search: false,
      switcher: false,
    }
  );

  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = category => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(
        expandedCategories.filter(
          expandedCategory => expandedCategory === category
        )
      );
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const toggleNav = (nav, type) => {
    dispatch({ nav, type });
  };

  return (
    <NavContext.Provider
      value={{
        leftNavIsOpen,
        searchIsOpen,
        switcherIsOpen,
        toggleNav,
        expandedCategories,
        toggleCategory,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
