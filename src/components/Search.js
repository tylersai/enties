import React, { useEffect } from "react";
import "./Search.css";

const Search = props => {
  const input = React.createRef();

  const process = props.process;

  useEffect(() => {}, []);

  const processSubmit = event => {
    event.preventDefault();
    document.getElementById("query").blur();
    process(input.current.value.trim().replace(" ","+"));
  };

  return (
    <div className="bg bg3 Search ent-shadow animate-popup-3">
      <form onSubmit={processSubmit}>
        <input
          className="bg bg3"
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
