import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./DiscoverSection.css";
import discover from "../assets/discover.svg";
import trend from "../assets/trend.svg";

import { API_END_POINT, API_KEY } from "../utils/Constant";
import MovieList from "./MovieList";

const DiscoverSection = () => {
  const [discoverList, setDiscoverList] = useState([]);
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    Axios.get(API_END_POINT + `/discover/movie?api_key=${API_KEY}`)
      .then(res => {
        setDiscoverList(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setDiscoverList([]);
      });
  }, []);

  useEffect(() => {
    Axios.get(API_END_POINT + `/trending/movie/week?api_key=${API_KEY}`)
      .then(res => {
        setTrendList(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setTrendList([]);
      });
  }, []);

  return (
    <section id="discover" className="DiscoverSection bg bg1">
      <br />
      <div className="add-padding">
        <MovieList list={discoverList} icon={discover} title="Discover" />
      </div>
      <div className="add-padding">
        <MovieList list={trendList} icon={trend} title="Trending" />
      </div>
    </section>
  );
};

export default DiscoverSection;
