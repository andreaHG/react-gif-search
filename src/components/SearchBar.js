import React from 'react';

const SearchBar = (props) => (
      <div className="search">
      <form onChange={props.getGifs}>
        <input placeholder="Enter text to search for gifs!"/>
      </form>
      </div>
    );
export default SearchBar;
