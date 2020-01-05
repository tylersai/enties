import React, { useEffect } from "react";
import "./Search.css";

const Search = props => {
  const input = React.createRef();

  const process = props.process;

  useEffect(() => {
    
  }, []);

  const processSubmit = event => {
    event.preventDefault();
    document.getElementById('query').blur();
    const obj = {
      query: input.current.value
    };
    process(obj);
  };

  return (
    <div className="bg bg3 Search">
      <form onSubmit={processSubmit}>
        <input
          className="bg bg3 fg fg3"
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
