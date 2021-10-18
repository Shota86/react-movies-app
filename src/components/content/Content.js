import React from "react";
import PropTypes from "prop-types";
import Movies from "./movies/Movies";

import "./content.css";

let Content = (props) => {
  return (
    <div className="content">
      <div className="filter">
        <ul>
          <li>
            <a>ALL</a>
          </li>
          <li>
            <a>DOCUMENTARY</a>
          </li>
          <li>
            <a>COMEDY</a>
          </li>
          <li>
            <a>HOROR</a>
          </li>
          <li>
            <a>CRIME</a>
          </li>
        </ul>
      </div>
      <div className="sort">
        <label>SORT BY:</label>
        <select name="sort">
          <option defaultValue={true}>RELEASE DATE</option>
          <option>RATING</option>
          <option>POPULAR</option>
        </select>
      </div>
      <p>39 movies found</p>
      <Movies 
        onEditMovieClick={props.onEditMovieClick}
        onDeleteMovieClick={props.onDeleteMovieClick}
        onMovieDetailsClick={props.onMovieDetailsClick}
        items={props.items}
      />
    </div>
  );
};

Content.propTypes = {
  onEditMovieClick: PropTypes.func.isRequired,
  onDeleteMovieClick: PropTypes.func.isRequired,
  onMovieDetailsClick: PropTypes.func.isRequired,
};

export default Content;
