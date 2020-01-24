import React from "react";
import { Link } from "react-router-dom";
import "./Keyword.css";

const Keyword = ({ keyword }) => {
  return <Link to={`/keyword/${keyword.id}`} className="fg fg3 bg bg2 keyword">{keyword.name}</Link>;
};

export default Keyword;