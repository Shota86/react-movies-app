import React, { useState } from "react";
import PropTypes from "prop-types";
import "./movieCard.css";

const MovieCard = props => {

  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);    
  };

  const {
    onEditMovieClick,
    onDeleteMovieClick,
    onMovieDetailsClick,
    id,
    image,
    title,
    genre,
  } = props;
  
  return (
    <>
      <div className="movieCard" onClick={() => onMovieDetailsClick(true, id)}>
        <div className="threeDotMenu" onClick={toggleDropDown}>
          {isDropDownVisible && (
            <div className="dropdown-content">
              <span className="close">&times;</span>
              <button onClick={onEditMovieClick}>Edit</button>
              <button onClick={onDeleteMovieClick}>Delete</button>
            </div>
          )}
        </div>
        <img src={image} alt={title} />
        <h2 className="title">{title}</h2>
        <p className="description">{genre}</p>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  onEditMovieClick: PropTypes.func.isRequired,
  onDeleteMovieClick: PropTypes.func.isRequired,
  onMovieDetailsClick: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  title: "Just a Perfect Movie",
  description: "Cool description",
};

export default MovieCard;
