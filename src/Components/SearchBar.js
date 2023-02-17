import React from "react";

const SearchBar = ({ handleSubmit, query, setQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        className="form-control"
        placeholder="Search Recipe"
        name="query"
        onChange={(event) => setQuery(event.target.value)}
      />
      <input
        disabled={!query} 
        type="submit" 
        className="btn" 
        value="Search" />
    </form>
  );
};

export default SearchBar;
