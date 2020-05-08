import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./SearchBar.css";
import homeIcon from "../../assets/home.svg";
import { useHistory } from "react-router-dom";

const SearchBar = ({ location }) => {

  const history = useHistory();
  const ref = React.createRef();

  if (location.pathname === "/") {
    return null;
  }

  const onSearch = e => {
    e.preventDefault();
    const searchTerm = ref.current.value;
    if (searchTerm) {
      history.push(`/search?q=${searchTerm.replace(' ', '+')}`);
    }
  };

  return (
    <header className="SearchBar bg bg2 animate-shrinkup">
      <div className="search-bar-wrapper">
        <Link to="/"><img src={homeIcon} alt="Home" /></Link>
        <form onSubmit={onSearch}>
          <input type="search" name="query" className="fg fg-primary" ref={ref} placeholder="Search" />
        </form>
      </div>
    </header>
  );
}

export default withRouter(SearchBar);