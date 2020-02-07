import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axio from "axios";
import queryString from "query-string";

import "./SearchByTypePage.css";
import cross from "../../assets/cross.svg";
import { API_END_POINT, API_KEY, toQueryString } from "../../utils/Constant";

import Loading from "../ui/Loading";
import Pagination from "../ui/Pagination";
import MovieCardList from "../element/MovieCardList";
import ThemeButton from "../ui/ThemeButton";
import KeywordsBlock from "../element/KeywordsBlock";

const SearchByTypePage = props => {
  const history = useHistory();

  const queryParams = queryString.parse(props.location.search);
  const searchQuery = queryParams.q
    ? queryParams.q.replace("+", " ").trim()
    : "";
  let currentPage = queryParams.p ? queryParams.p.trim() : 1;

  try {
    currentPage = parseInt(currentPage);
    if (currentPage < 1) currentPage = 1;
  } catch {
    currentPage = 1;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (searchQuery) {
      window.scrollTo(0, 0);
      document.title = `Enties \u2022 Search "${searchQuery}"`;
      setIsLoading(true);

      const queryObj = {
        api_key: API_KEY,
        query: searchQuery
      };

      if (currentPage > 1) {
        queryObj.page = currentPage;
      }

      const link = API_END_POINT + "/search/movie?" + toQueryString(queryObj);
      Axio.get(link)
        .then(res => {
          setTotalPages(res.data.total_pages);
          setTotalResults(res.data.total_results);
          setMovieList(res.data.results);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setMovieList([]);
          setTotalPages(0);
          setTotalResults(0);
          setIsLoading(false);
        });
    }
  }, [searchQuery, currentPage]);

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
    <section className="SearchByTypePage bg bg1 animate-popup" id="result">
      {searchQuery ? (
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
      ) : null}
      {totalPages > 1 ? (
        <Pagination
          currentPage={currentPage}
          searchQuery={searchQuery}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      ) : null}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MovieCardList movieList={movieList} />
          <KeywordsBlock searchQuery={searchQuery} />
        </>
      )}
    </section>
  );
};

export default SearchByTypePage;
