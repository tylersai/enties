import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axio from "axios";

import "./MovieListPage.css";
import cross from "../../assets/cross.svg";
import { API_END_POINT } from "../../utils/Constant";

import Loading from "../ui/Loading";
import ThemeButton from "../ui/ThemeButton";
import MovieCardList from "../element/MovieCardList";

const MovieListPage = ({ link, title }) => {
  const { kid } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [keywordName, setKeywordName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const fullLink = API_END_POINT + (kid ? `/keyword/${kid}/movies` : link);
    Axio.get(fullLink)
      .then((res) => {
        setMovieList(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMovieList([]);
        setIsLoading(false);
      });
  }, [link, kid]);

  useEffect(() => {
    if (kid) {
      const klink = API_END_POINT + `/keyword/${kid}`;
      Axio.get(klink)
        .then((res) => {
          setKeywordName(res.data.name);
          document.title = `Enties \u2022 "${res.data.name}"`;
        })
        .catch((err) => {
          setKeywordName("");
          document.title = `Enties \u2022 Keyword`;
        });
    } else {
      document.title = `Enties \u2022 ${title}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kid]);

  const closePage = () => {
    const resSec = document.getElementById("result");
    resSec.classList.remove("animate-popup");
    resSec.classList.add("animate-popdown");
    setTimeout(() => {
      navigate(-1);
    }, 200);
  };

  return (
    <section className="MovieListPage bg bg1 animate-popup" id="result">
      <div className="title-bar">
        {kid && keywordName ? (
          <div>
            <h4 style={{ display: "inline-block", marginRight: "8px" }} className="fg fgg animate-enlarge">
              Keyword:
            </h4>
            <span className="fg fg3 bg bg2 keyword animate-enlarge">{keywordName}</span>
          </div>
        ) : (
          <h2 className="ent-text-shadow">{title}</h2>
        )}

        <ThemeButton />
        <button onClick={closePage} className="fg fg2 close-page animate-enlarge">
          <img src={cross} alt="x" />
        </button>
      </div>

      {isLoading ? <Loading /> : <MovieCardList movieList={movieList} />}
    </section>
  );
};

export default MovieListPage;
