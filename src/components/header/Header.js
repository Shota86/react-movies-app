import React from "react";
import header_background from "../../assets/header_background.png";
import "./header.css";

let Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${header_background})` }}>
      <p className="logo">netflixroulette</p>
      <button className="addButton">+ ADD MOVIE</button>
      <div className="search">
        <p>FIND YOUR MOVIE</p>
        <input type="text" placeholder="What do you whant to watch" />
        <button>SEARCH</button>
      </div>
      
    </div>
  );
};

export default Header;
