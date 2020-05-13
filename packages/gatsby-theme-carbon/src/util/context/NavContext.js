import React, { useReducer, useState } from 'react';

const NavContext = React.createContext({
  leftNavIsOpen: false,
  searchIsOpen: false,
  switcherIsOpen: false,
  isManagingFocus: false,
  leftNavScrollOffset: 0,
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
  const [
    { leftNavIsOpen, searchIsOpen, switcherIsOpen, leftNavScrollOffset },
    dispatch,
  ] = useReducer(reducer, {
    leftNavIsOpen: false,
    searchIsOpen: false,
    switcherIsOpen: false,
  });

  const [leftNavScrollTop, setLeftNavScrollTop] = useState(0);

  const toggleNavState = (nav, type) => {
    dispatch({ nav, type });
  };

  const [isManagingFocus, setIsManagingFocus] = useState(false);

  const value = {
    leftNavIsOpen,
    searchIsOpen,
    switcherIsOpen,
    toggleNavState,
    isManagingFocus,
    setIsManagingFocus,
    leftNavScrollOffset,
    leftNavScrollTop,
    setLeftNavScrollTop,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavContext;
