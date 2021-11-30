import React from "react";
import PropTypes from "prop-types";
import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";

import header_background from "../../assets/header_background.png";
import "./header.css";

let Header = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let genreParam = searchParams.get("genre") || "";
  let searchQueryParam = searchParams.get("searchQuery") || "";
  let sortByParam = searchParams.get("sortBy") || "release_date";

  const { onSearchMovieClick, onAddMovieClick } = props;
  
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${header_background})` }}
    >
      <p className="logo">netflixroulette</p>
      <button className="addButton" onClick={onAddMovieClick}>
        + ADD MOVIE
      </button>
      <div className="search">
        <p>FIND YOUR MOVIE</p>
        <input
          type="text"
          placeholder="What do you whant to watch"
          value={searchQueryParam}
          onChange={(event) => {
            let searchQuery = event.target.value;
            if (searchQuery) {
              setSearchParams({ genre: genreParam, searchQuery, sortBy: sortByParam });
            } else {
              setSearchParams({genre: genreParam, sortBy: sortByParam});
            }
          }}       
        />
        <button onClick={onSearchMovieClick}>SEARCH</button>
      </div>
    </div>
  );
};

export default Header;
