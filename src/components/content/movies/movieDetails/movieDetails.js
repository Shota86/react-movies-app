import React from "react";
import PropTypes from "prop-types";

import "./movieDetails.css";
import search_icon from "../../../../assets/search_icon.png";

let MovieDetails = (props) => {
  const { onCloseMovieDetailsClick, movieDetailsData } = props;

  return (
    <div className="movieDetails">
      <p className="logo">netflixroulette</p>
      <div
        className="closeButton"
        style={{ backgroundImage: `url(${search_icon})` }}
        onClick={onCloseMovieDetailsClick}
      ></div>
      <img src={movieDetailsData.image} alt={movieDetailsData.title} />
      <div className="movieDescription">
        <h2 className="title">{movieDetailsData.title}</h2>
        <div className="ratingCircle">
          <p className="rating">8.9</p>
        </div>
        <p className="genre">Action</p>
        <p className="yearRuntime">1994  &nbsp;&nbsp;  2h 34min</p>        
        <p className="overview">
          Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta)
          are two hit men who are out to retrieve a suitcase stolen from their
          employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also
          asked Vincent to take his wife Mia (Uma Thurman) out a few days later
          when
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  onCloseMovieDetailsClick: PropTypes.func.isRequired,
};

export default MovieDetails;
