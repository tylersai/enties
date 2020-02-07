import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axio from "axios";
import queryString from "query-string";

import "./SearchPage.css";
import cross from "../../assets/cross.svg";
import { API_END_POINT, API_KEY, toQueryString } from "../../utils/Constant";

import Loading from "../ui/Loading";
import ThemeButton from "../ui/ThemeButton";
import KeywordsBlock from "../element/KeywordsBlock";
import FoldedBox from "../ui/FoldedBox";
import MovieCardSmall from "../element/MovieCardSmall";

const SearchPage = props => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [movieRes, setMovieRes] = useState({});
  const [actorRes, setActorRes] = useState({});
  const [collectionRes, setCollectionRes] = useState({});

  const queryParams = queryString.parse(props.location.search);
  const searchQuery = queryParams.q
    ? queryParams.q.replace("+", " ").trim()
    : "";

  const getLink = mediaType => {
    const queryObj = {
      api_key: API_KEY,
      query: searchQuery
    };
    return `${API_END_POINT}/search/${mediaType}?${toQueryString(queryObj)}`;
  };

  const fetchData = async () => {
    if (searchQuery) {
      window.scrollTo(0, 0);
      document.title = `Enties \u2022 Search "${searchQuery}"`;
      setIsLoading(true);

      try {
        let res = await Axio.get(getLink("movie"));
        setMovieRes(res.data);

        res = await Axio.get(getLink("actor"));
        setActorRes(res.data);

        res = await Axio.get(getLink("collection"));
        setCollectionRes(res.data);

        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const closeSearch = () => {
    try {
      document.getElementById("result").animate(
        [
          {
            opacity: 1,
            transform: "translateY(0)"
          },
          {
            opacity: 0,
            transform: "translateY(10vh)"
          }
        ],
        {
          duration: 200,
          fill: "forwards"
        }
      ).onfinish = () => {
        history.push("/");
      };
    } catch {
      history.push("/");
    }
  };

  return (
    <section className="SearchPage bg bg1 animate-popup" id="result">
      <div className="search-desc">
        <h4 className="fg fgg animate-popup">
          {isLoading ? "Searching for : " : "Results for : "}
          <span>"{searchQuery}"</span>
        </h4>
        <ThemeButton />
        <button
          onClick={closeSearch}
          className="fg fg2 clear-search animate-enlarge"
        >
          <img src={cross} alt="x" />
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        movieRes.total_results || actorRes.total_results || collectionRes.total_results ? (
        <>
          <FoldedBox totalResults={movieRes.total_results} title="Movie">
          {
            movieRes.results.slice(0,10).map(m => <MovieCardSmall m={m} key={m.id}/>)
          }
          </FoldedBox>
          <KeywordsBlock searchQuery={searchQuery} />
        </>):(
          <div className="not-found">NOT FOUND</div>
        )
      )}
    </section>
  );
};

export default SearchPage;
