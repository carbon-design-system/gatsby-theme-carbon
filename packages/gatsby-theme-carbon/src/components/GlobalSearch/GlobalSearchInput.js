/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect, useContext, useRef } from 'react';
import Close20 from '@carbon/icons-react/es/close/20';
import Search20 from '@carbon/icons-react/es/search/20';
import NavContext from '../../util/context/NavContext';
import { useOnClickOutside } from '../../util/hooks';

const GlobalSearchInput = () => {
  const inputRef = useRef(null);
  const searchRef = useRef(null);
  const [input, setInput] = useState('');
  const { toggleNavState } = useContext(NavContext);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  useOnClickOutside(searchRef, () => toggleNavState('searchIsOpen', 'close'));

  return (
    <div
      ref={searchRef}
      className="bx--search bx--search--lg bx--search--dark"
      role="search"
    >
      <Search20
        description="Search Maginfier"
        className="bx--search-magnifier"
      />
      <label htmlFor="doc-search" className="bx--label">
        Search by element, component, or token, etc
      </label>
      <input
        ref={inputRef}
        aria-label="Search"
        type="text"
        className="bx--search-input"
        id="doc-search"
        placeholder="Search by element, component, or token, etc"
        value={input}
        onChange={evt => setInput(evt.target.value)}
      />
      <button
        className="bx--search-close"
        title="Clear search input"
        type="button"
        aria-label="Clear search input"
        onClick={() => {
          setInput('');
          toggleNavState('searchIsOpen', 'close');
        }}
      >
        <Close20 description="Search Clear" className="bx--search-clear" />
      </button>
    </div>
  );
};

export default GlobalSearchInput;
