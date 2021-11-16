import React from "react";
import PropTypes from "prop-types";

import "./movieDetails.css";
import search_icon from "../../../../assets/search_icon.png";

let MovieDetails = (props) => {
  const { onCloseMovieDetailsClick, movieDetailsData } = props;
  const {
    title,
    poster_path: poster,
    vote_average: rating,
    genres,
    release_date,
    runtime,
    overview,
  } = movieDetailsData;

  return (
    <div className="movieDetails">
      <p className="logo">netflixroulette</p>
      <div
        className="closeButton"
        style={{ backgroundImage: `url(${search_icon})` }}
        onClick={onCloseMovieDetailsClick}
      ></div>
      <img src={poster} alt={title} width="322px" height="455px"/>
      <div className="movieDescription">
        <h2 className="title">{title}</h2>
        <div className="ratingCircle">
          <p className="rating">{rating}</p>
        </div>
        <p className="genre">{genres.join(", ")}</p>
        <p className="yearRuntime">
          {release_date.substring(0, 4)} &nbsp;&nbsp; {runtime} min
        </p>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  onCloseMovieDetailsClick: PropTypes.func.isRequired,
};

export default MovieDetails;
