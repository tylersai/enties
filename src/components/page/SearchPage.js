import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axio from "axios";
import queryString from "query-string";

import "./SearchPage.css";
import cross from "../../assets/cross.svg";
import { API_END_POINT, toQueryString } from "../../utils/Constant";

import Loading from "../ui/Loading";
import ThemeButton from "../ui/ThemeButton";
import KeywordsBlock from "../element/KeywordsBlock";
import FoldedBox from "../ui/FoldedBox";
import MovieCardSmall from "../element/MovieCardSmall";
import CollectionCard from "../element/CollectionCard";
import ActorCard from "../element/ActorCard";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const [movieRes, setMovieRes] = useState({});
  const [actorRes, setActorRes] = useState({});
  const [collectionRes, setCollectionRes] = useState({});

  const queryParams = queryString.parse(location.search);
  const searchQuery = queryParams.q ? queryParams.q.replace("+", " ").trim() : "";

  const getLink = (mediaType) => {
    const queryObj = {
      query: searchQuery,
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
      } catch {}

      try {
        let res = await Axio.get(getLink("person"));
        setActorRes(res.data);
      } catch {}

      try {
        let res = await Axio.get(getLink("collection"));
        setCollectionRes(res.data);
      } catch {}

      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const closeSearch = () => {
    const resSec = document.getElementById("result");
    resSec.classList.remove("animate-popup");
    resSec.classList.add("animate-popdown");
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  return (
    <section className="SearchPage bg bg1 animate-popup" id="result">
      <div className="search-desc">
        <h4 className="fg fgg animate-popup">
          {isLoading ? "Searching for : " : "Results for : "}
          <span>"{searchQuery}"</span>
        </h4>
        <ThemeButton />
        <button onClick={closeSearch} className="fg fg2 clear-search animate-enlarge">
          <img src={cross} alt="x" />
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : movieRes.total_results || actorRes.total_results || collectionRes.total_results ? (
        <>
          <FoldedBox
            totalResults={movieRes.total_results}
            title="Movie"
            routeLink={`/search/movie/?q=${searchQuery.replace(" ", "+")}`}
          >
            {movieRes.results.slice(0, 10).map((m) => (
              <MovieCardSmall m={m} key={m.id} />
            ))}
          </FoldedBox>

          <FoldedBox totalResults={collectionRes.total_results} title="Collection">
            {collectionRes.results.slice(0, 10).map((coll) => (
              <div key={coll.id}>
                <CollectionCard collection={coll} />
              </div>
            ))}
          </FoldedBox>

          <FoldedBox totalResults={actorRes.total_results} title="Actor">
            {actorRes.results.slice(0, 10).map((a) => (
              <div key={a.id}>
                <ActorCard actor={a} />
              </div>
            ))}
          </FoldedBox>

          <KeywordsBlock searchQuery={searchQuery} />
        </>
      ) : (
        <div className="not-found">NOT FOUND</div>
      )}
    </section>
  );
};

export default SearchPage;
