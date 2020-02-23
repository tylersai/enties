import React, { useEffect, useState } from "react";
import "./ReviewsBlock.css";
import Axios from "axios";
import { API_END_POINT } from "../../utils/Constant";

const ReviewsBlock = ({ movie_id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movie_id) {
      Axios.get(API_END_POINT + `/movie/${movie_id}/reviews`)
        .then(res => {
          if (res.data && res.data.results && res.data.results.length > 0) {
            setReviews(res.data.results);
          } else {
            setReviews([]);
          }
        })
        .catch(err => {
          setReviews([]);
        });
    }
  }, [movie_id]);

  if (movie_id && reviews.length > 0)
    return (
      <div className="ReviewsBlock">
        <h3 className="fg fg3">Reviews</h3>
        <hr align="left" className="fg" />
        {
					reviews.slice(0, 10).map(r => (
						<div className="review fg fg3" key={r.id}>
							<h4>{r.author}</h4>
							<p>{r.content}</p>
						</div>
					))
				}
      </div>
    );
  else return null;
};

export default ReviewsBlock;
