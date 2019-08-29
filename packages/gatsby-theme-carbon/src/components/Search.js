import React, { useState } from 'react';

// Search component
const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  console.log(results);

  const getSearchResults = q => {
    if (q && window.__LUNR__) {
      const lunrIndex = window.__LUNR__.en;
      const searchResults = lunrIndex.index.search(`${q}*`);
      setResults(
        searchResults.map(({ ref }) => console.log(ref) || lunrIndex.store[ref])
      );
    } else {
      setResults([]);
    }
  };

  const onChange = e => {
    setQuery(e.target.value);
    getSearchResults(e.target.value);
  };

  return (
    <div style={{ marginLeft: '33vw' }}>
      <input type="text" value={query} onChange={onChange} />
      <ul>
        {results.map(page => (
          <li key={page.path}>
            <a href={page.path}>{page.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
