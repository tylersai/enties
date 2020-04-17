import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {

  const onSearch = e => {
    e.preventDefault();
    alert("Searched!");
  };

  const expand = () => {
    document.getElementById("search-btn").classList.toggle("close");
    document.getElementById("search-input").classList.toggle("square");
  };

  return (
    <div className="SearchBar bg bg2">
      <form id="content" onSubmit={onSearch}>
        <input type="text" name="input" className="input" id="search-input" />
        <button type="reset" className="search" id="search-btn" onClick={expand}></button>
      </form>
    </div>
  );
}

export default SearchBar;