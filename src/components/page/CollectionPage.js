import React, { useState, useEffect } from "react";
import Axio from "axios";

import "./CollectionPage.css";
import collectionLogo from "../../assets/collection.svg";
import { API_END_POINT, API_KEY, POSTER_PATH } from "../../utils/Constant";

import Loading from "../ui/Loading";
import CollectionParts from "../element/CollectionParts";
import PriceTag from "../ui/PriceTag";
import NoData from "../element/NoData";
import Carousel from "../ui/Carousel";

const CollectionPage = ({ match }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [isLoadingColl, setIsLoadingColl] = useState(false);
  const [collection, setCollection] = useState({});
  const [img, setImg] = useState({});

  const fetchImg = async () => {
    setIsLoadingImg(true);
    const imgLink =
      API_END_POINT +
      `/collection/${match.params.cid}/images?api_key=${API_KEY}`;
    try {
      const resImg = await Axio.get(imgLink);
      setImg(resImg.data);
      setIsLoadingImg(false);
    } catch {
      setIsLoadingImg(false);
    }
  };

  const fetchColl = async () => {
    setIsLoadingColl(true);
    const collLink =
      API_END_POINT + `/collection/${match.params.cid}?api_key=${API_KEY}`;
    try {
      const collImg = await Axio.get(collLink);
      setCollection(collImg.data);
      setIsLoadingColl(false);
    } catch {
      setIsLoadingColl(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImg();
    fetchColl();
  }, []);

  return (
    <section className="CollectionPage bg bg1 animate-popup">
      {isLoadingImg || isLoadingColl ? (
        <div className="center-loading">
          <Loading />
        </div>
      ) : collection.name ? (
        <>
          <Carousel imgs={img.backdrops} />
          <div className="detail-wrapper">
            <div className="detail-poster" id="detail-poster">
              {collection.backdrop_path ? (
                <img
                  className="animate-fadein"
                  src={POSTER_PATH + collection.backdrop_path}
                  alt="POSTER"
                />
              ) : (
                <img
                  className="animate-fadein"
                  src={collectionLogo}
                  alt="POSTER"
                />
              )}
            </div>
            <div className="detail-title">
              <div>
                <h1 className="fg fg2 ent-text-shadow">{collection.name}</h1>
                <hr align="left" className="fg" />
                <p className="fg fg3">{collection.overview}</p>
                <div className="fg fg3 section-label">Buy Bundle : </div>
                <PriceTag price={collection.parts.length * 13 + 0.99 + parseInt(collection.parts.length * 1.5)}/>
              </div>
            </div>
          </div>
          <CollectionParts parts={collection.parts} />
        </>
      ) : (
        <NoData svgPath={collectionLogo} label="BUNDLE NOT FOUND"/>
      )}
    </section>
  );
};

export default CollectionPage;
