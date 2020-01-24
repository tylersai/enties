import React from "react";
import "./Keywords.css";

const Keywords = ({ keywords }) => {
  return (
    <>
      {keywords.map(kw => (
        <div key={kw.id} className="fg fg3 bg bg2 keyword">
          {kw.name}
        </div>
      ))}
    </>
  );
};

export default Keywords;