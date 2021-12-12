import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./movieCard/MovieCard";

import "./movies.css";

const Movies = (props) => {
  return (
    <>
      <div className="movies">
        {props.items.map((movie) => (
          <MovieCard
            title={movie.title}
            genre={movie.genres.join(", ")}
            image={movie.poster_path}
            key={movie.id}
            id={movie.id}
            onEditMovieClick={props.onEditMovieClick}
            onDeleteMovieClick={props.onDeleteMovieClick}
            onMovieDetailsClick={props.onMovieDetailsClick}
          />
        ))}
      </div>      
    </>
  );
};

Movies.propTypes = {
    onEditMovieClick: PropTypes.func.isRequired,
    onDeleteMovieClick: PropTypes.func.isRequired,
    onMovieDetailsClick: PropTypes.func.isRequired,
}

export default Movies;
