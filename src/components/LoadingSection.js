import React, { useEffect } from "react";
import "./LoadingSection.css";

import Loading from "./Loading";

const LoadingSection = props => {
  useEffect(() => {
    const h = document.documentElement.clientHeight;
    const searchHeight = document.getElementById("search").clientHeight;

    document.getElementById("loading").style.minHeight = (h - searchHeight) + "px";
  }, []);

  return (
    <section className="LoadingSection bg bg1" id="loading">
      <Loading />
    </section>
  );
};

export default LoadingSection;
