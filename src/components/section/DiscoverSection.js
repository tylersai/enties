import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./DiscoverSection.css";
import discover from "../../assets/discover.svg";
import trend from "../../assets/trend.svg";
import favourite from "../../assets/favourite.svg";

import { API_END_POINT, API_KEY } from "../../utils/Constant";
import MovieList from "../element/MovieList";

const DiscoverSection = () => {
  const [loadDiscover, setLoadDiscover] = useState(false);
  const [discoverList, setDiscoverList] = useState([]);

  const [loadTrend, setLoadTrend] = useState(false);
  const [trendList, setTrendList] = useState([]);

  const [loadRated, setLoadRated] = useState(false);
  const [ratedList, setRatedList] = useState([]);

  useEffect(() => {
    setLoadDiscover(true);
    Axios.get(API_END_POINT + `/discover/movie?api_key=${API_KEY}`)
      .then(res => {
        setLoadDiscover(false);
        setDiscoverList(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setLoadDiscover(false);
        setDiscoverList([]);
      });
  }, []);

  useEffect(() => {
    setLoadTrend(true);
    Axios.get(API_END_POINT + `/trending/movie/week?api_key=${API_KEY}`)
      .then(res => {
        setLoadTrend(false);
        setTrendList(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setLoadTrend(false);
        setTrendList([]);
      });
  }, []);
  
  useEffect(() => {
    setLoadRated(true);
    Axios.get(API_END_POINT + `/movie/top_rated?api_key=${API_KEY}`)
      .then(res => {
        setLoadRated(false);
        setRatedList(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setLoadRated(false);
        setRatedList([]);
      });
  }, []);

  return (
    <section id="discover" className="DiscoverSection bg bg1">
      <br />
      <div className="add-padding">
        <MovieList isLoading={loadDiscover} list={discoverList} icon={discover} title="Discover" toLink="/discover" />
      </div>
      <div className="add-padding">
        <MovieList isLoading={loadTrend} list={trendList} icon={trend} title="Trending" toLink="/trending" />
      </div>
      <div className="add-padding">
        <MovieList isLoading={loadRated} list={ratedList} icon={favourite} title="Highest Rated" toLink="/highest-rated" />
      </div>
      <br/>
    </section>
  );
};

export default DiscoverSection;
