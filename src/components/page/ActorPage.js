import React, { useState, useEffect, useContext } from "react";
import "./ActorPage.css";
import Axio from "axios";

import actorDark from "../../assets/actor-dark.svg";
import actorLight from "../../assets/actor-light.svg";
import actorGreen from "../../assets/actor-green.svg";
import { API_END_POINT, API_KEY, POSTER_PATH } from "../../utils/Constant";

import Loading from "../ui/Loading";
import NoData from "../element/NoData";
import RelatedMoviesBlock from "../element/RelatedMoviesBlock";
import ImageGallery from "../ui/ImageGallery";
import Popularity from "../ui/Popularity";
import { ThemeContext } from "../../utils/Theme";

const ActorPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState({});

  const context = useContext(ThemeContext);

  const fetchData = async () => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    document.title = "Enties \u2022 Actor";
    try {
      const res = await Axio.get(
        API_END_POINT + `/person/${match.params.aid}?api_key=${API_KEY}`
      );
      setActor(res.data);
      setIsLoading(false);
      document.title = `Enties \u2022 ${res.data.name}`;
    } catch {
      setActor({});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [match.params.aid]);

  return (
    <section className="ActorPage bg bg1 animate-popup">
      {isLoading ? (
        <div className="center-loading">
          <Loading />
        </div>
      ) : actor.name ? (
        <>
          <div className="wrapper">
            <div className="profile fg fgg">
              {actor.profile_path ? (
                <img
                  className="animate-enlarge"
                  src={POSTER_PATH + actor.profile_path}
                  alt="PROFILE"
                />
              ) : (
                  <img className="animate-enlarge no-profile" src={actorGreen} alt="PROFILE" />
                )}
            </div>
            <div className="detail" style={{ position: "relative" }}>
              <div>
                <h1 className="fg fg2 ent-text-shadow">{actor.name}</h1>
                <hr align="left" className="fg" />
                <p className="fg fgg ent-small-text">
                  Known for{" "}
                  <span className="fg3">"{actor.known_for_department}"</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <p className="fg fgg ent-small-text">Popularity : </p>
                  </div>
                  <div style={{ padding: "4px 0 0 10px" }}>
                    <Popularity>{actor.popularity}</Popularity>
                  </div>
                </div>

                <p className="fg fg3">
                  {actor.biography}
                </p>
              </div>
            </div>
          </div>
          <div className="section-detail">
            <h3 className="fg fg3">Detail Information</h3>
            <hr align="left" className="fg fullwidth" />
            <div>
              <div className="fg fgg section-label">
                Gender :{" "}
                <span className="fg3">
                  {actor.gender === 1 ? "Female" : "Male"}
                </span>
              </div>
            </div>
            {actor.birthday ? (
              <div>
                <div className="fg fgg section-label">
                  Birthday : <span className="fg3">{actor.birthday}</span>
                </div>
              </div>
            ) : null}
            {actor.place_of_birth ? (
              <div>
                <div className="fg fgg section-label">
                  Origin : <span className="fg3">{actor.place_of_birth}</span>
                </div>
              </div>
            ) : null}
            <div>
              <div className="fg fgg section-label">
                Active Status :{" "}
                <span className="fg3">
                  {actor.deathday ? `Died on ${actor.deathday}` : "Alive"}
                </span>
              </div>
            </div>

            <RelatedMoviesBlock title="Appears On" link={`/person/${actor.id}/movie_credits`} type="cast" />

            <RelatedMoviesBlock title="Works As Crew On" link={`/person/${actor.id}/movie_credits`} type="crew" />

            <ImageGallery title="Related Images" id={actor.id} type="person" />

          </div>
        </>
      ) : (
            <NoData svgPath={context.theme === "dark" ? actorDark : actorLight} label="ACTOR NOT FOUND" />
          )}
    </section>
  );
};

export default ActorPage;
