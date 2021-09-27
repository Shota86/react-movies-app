import React from "react";
import Movies from "./movies/Movies";
import "./content.css";

let Content = () => {
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
      <Movies />
    </div>
  );
};

export default Content;
