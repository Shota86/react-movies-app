import React, { Component } from "react";
import PropTypes from "prop-types";
import "./movieCard.css";

class MovieCard extends Component {
  state = {
    isDropDownVisible: false,
  };

  toggleDropDown = () => {
    this.setState({ isDropDownVisible: !this.state.isDropDownVisible });
  };

 
  render() {
    const { isDropDownVisible } = this.state;
    const { onEditMovieClick, onDeleteMovieClick } = this.props; 
    return (
      <>
        <div className="movieCard">
          <div className="threeDotMenu" onClick={this.toggleDropDown}>          
            {isDropDownVisible && (
              <div className="dropdown-content">
                <span className="close">&times;</span>
                <button onClick={onEditMovieClick}>Edit</button>
                <button onClick={onDeleteMovieClick}>Delete</button>
              </div>
            )}
          </div>
          <img src={this.props.image} alt={this.props.title} />
          <h2 className="title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
        </div>
      </>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  onEditMovieClick: PropTypes.func.isRequired,
  onDeleteMovieClick: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  title: "Just a Perfect Movie",
  description: "Cool description",
};

export default MovieCard;
