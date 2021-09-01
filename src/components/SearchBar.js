import React, { useState } from "react";

//

const SearchBar = ({ onFormSubmit }) => {
  // State za unos pretrage
  const [query, setQuery] = useState("");

  const updateTerm = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(query);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="yt-search">YouTube Browser App</label>
          <input
            value={query}
            onChange={updateTerm}
            type="text"
            name="yt"
            id="yt-search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
