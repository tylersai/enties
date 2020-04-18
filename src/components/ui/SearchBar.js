import React from "react";
import "./SearchBar.css";
import homeIcon from "../../assets/home.svg";

const SearchBar = () => {

  const ref = React.createRef();

  const onSearch = e => {
    e.preventDefault();
    console.log(ref.current.value);
  };

  return (
    <div className="SearchBar bg bg2 animate-shrinkup">
      <div className="search-bar-wrapper">
        <a href="/"><img src={homeIcon} /></a>
        <form onSubmit={onSearch}>
          <input type="search" name="query" className="fg fg-primary" ref={ref} placeholder="Search" />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;