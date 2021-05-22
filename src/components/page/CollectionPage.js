import React, { useState, useEffect, useContext } from "react";
import Axio from "axios";

import "./CollectionPage.css";
import collectionDark from "../../assets/collection-dark.svg";
import collectionLight from "../../assets/collection-light.svg";
import { API_END_POINT, POSTER_PATH } from "../../utils/Constant";

import Loading from "../ui/Loading";
import CollectionParts from "../element/CollectionParts";
import PriceTag from "../ui/PriceTag";
import NoData from "../element/NoData";
import Carousel from "../ui/Carousel";
import { ThemeContext } from "../../utils/Theme";

const CollectionPage = ({ match }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [isLoadingColl, setIsLoadingColl] = useState(false);
  const [collection, setCollection] = useState({});
  const [img, setImg] = useState({});

  const context = useContext(ThemeContext);

  const fetchImg = async () => {
    setIsLoadingImg(true);
    const imgLink = API_END_POINT + `/collection/${match.params.cid}/images`;
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
    const collLink = API_END_POINT + `/collection/${match.params.cid}`;
    try {
      const resColl = await Axio.get(collLink);
      setCollection(resColl.data);
      setIsLoadingColl(false);
      document.title = `Enties \u2022 ${resColl.data.name}`;
    } catch {
      setIsLoadingColl(false);
      document.title = "Enties \u2022 Collection";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImg();
    fetchColl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  className="animate-fadein no-poster"
                  src={
                    context.theme === "dark" ? collectionDark : collectionLight
                  }
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
                <PriceTag
                  price={
                    collection.parts.length * 13 +
                    0.99 +
                    parseInt(collection.parts.length * 1.5)
                  }
                />
              </div>
            </div>
          </div>
          <CollectionParts parts={collection.parts} />
        </>
      ) : (
        <NoData
          svgPath={context.theme === "dark" ? collectionDark : collectionLight}
          label="BUNDLE NOT FOUND"
        />
      )}
    </section>
  );
};

export default CollectionPage;
