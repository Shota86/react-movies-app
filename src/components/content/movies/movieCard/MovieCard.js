import React from "react";
import PropTypes from "prop-types";
import "./movieCard.css";

let MovieCard = (props) => {
  return (
    <div className="movieCard">
      <img src={props.image} alt={props.title}/>
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
    </div>
  );
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
}

MovieCard.defaultProps = {
    title: 'Just a Perfect Movie',
    description: 'Cool description',
}

export default MovieCard;
