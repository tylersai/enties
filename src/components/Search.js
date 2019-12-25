import React, { useEffect } from "react";
import "./Search.css";

const Search = props => {
  const input = React.createRef();

  const process = props.process;

  useEffect(() => {
    const searchInputs = document.querySelector(".Search input");
    const searchSection = document.getElementById('search');
    searchInputs.addEventListener("focus", e => {
        searchSection.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
    });
    searchInputs.addEventListener("focusout", e => {
        searchSection.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });
  }, []);

  const processSubmit = event => {
    event.preventDefault();
    const obj = {
      query: input.current.value
    };
    process(obj);
  };

  return (
    <div className="Search">
      <form onSubmit={processSubmit}>
        <input
          name="query"
          id="query"
          type="text"
          placeholder="Search Movie"
          ref={input}
        />
      </form>
    </div>
  );
};

export default Search;
