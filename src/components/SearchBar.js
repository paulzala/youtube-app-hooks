import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search for a Video</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter one or more search terms..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
