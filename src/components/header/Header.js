import React from "react";
import PropTypes from "prop-types";

import header_background from "../../assets/header_background.png";
import "./header.css";

let Header = (props) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${header_background})` }}
    >
      <p className="logo">netflixroulette</p>
      <button className="addButton" onClick={props.onAddMovieClick}>
        + ADD MOVIE
      </button>
      <div className="search">
        <p>FIND YOUR MOVIE</p>
        <input type="text" placeholder="What do you whant to watch" />
        <button>SEARCH</button>
      </div>
    </div>
  );
};

Header.propTypes ={
  onAddMovieClick: PropTypes.func.isRequired
};

export default Header;
