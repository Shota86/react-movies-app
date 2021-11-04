import React from "react";
import PropTypes from "prop-types";
import Movies from "./movies/Movies";

import "./content.css";

let Content = (props) => {

  const { totalAmount, selectedGenre, onFilterMovieClick, onSortMovieClick } = props;

  return (
    <div className="content">
      <div className="filter">
        <ul>
          <li>
            <a onClick={() => onFilterMovieClick("")} className={selectedGenre==="" ? 'selected' : ''}>All</a>
          </li>
          <li>
            <a onClick={() => onFilterMovieClick("Documentary")} className={selectedGenre==="Documentary" ? 'selected' : ''}>Documentary</a>
          </li>
          <li>
            <a onClick={() => onFilterMovieClick("Comedy")} className={selectedGenre==="Comedy" ? 'selected' : ''}>Comedy</a>
          </li>
          <li>
            <a onClick={() => onFilterMovieClick("Horror")} className={selectedGenre==="Horror" ? 'selected' : ''}>Horror</a>
          </li>
          <li>
            <a onClick={() => onFilterMovieClick("Crime")} className={selectedGenre==="Crime" ? 'selected' : ''}>Crime</a>
          </li>         
        </ul>
      </div>
      <div className="sort">
        <label>SORT BY:</label>
        <select name="sort" onChange={(e) => onSortMovieClick(e.target.value)}> 
          <option value="release_date">RELEASE DATE</option>          
          <option value="vote_average">RATING</option>          
        </select>
      </div>
      <p className="amount">{totalAmount} movies found</p>
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
  totalAmount: PropTypes.number,
  onEditMovieClick: PropTypes.func.isRequired,
  onDeleteMovieClick: PropTypes.func.isRequired,
  onMovieDetailsClick: PropTypes.func.isRequired,
  onFilterMovieClick: PropTypes.func.isRequired,
  onSortMovieClick: PropTypes.func.isRequired,
};

Content.defaultProps = {
  totalAmount: 0,  
};

export default Content;
