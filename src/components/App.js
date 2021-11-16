import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import ErrorBoundary from "./ErrorBoundary";
import AddMovieModal from "./content/movies/modal/AddMovieModal";
import EditMovieModal from "./content/movies/modal/EditMovieModal";
import DeleteMovieModal from "./content/movies/modal/DeleteMovieModal";
import MovieDetails from "./content/movies/movieDetails/movieDetails";

import { getMovies, deleteMovie } from "../redux/actions/thunks";
import { getMovieItems, getMoviesTotalAmount } from "../redux/selectors/selectors";

import "../index.css";

const App = (props) => {
  const [isAddMovieModalVisible, setAddMovieModalVisible] = useState(false);
  const [isEditMovieModalVisible, setEditMovieModalVisible] = useState(false);
  const [isDeleteMovieModalVisible, setDeleteMovieModalVisible] = useState(false);
  const [isMovieDetailsVisible, setMovieDetailsVisible] = useState(false);
  const [movieId, setMovieId] = useState(undefined);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSortValue, setSelectedSortValue] = useState("release_date");

  const { movieItems, totalAmount, getMovies, deleteMovie } = props;

  useEffect(() => {    
    getMovies();
  }, []);

  const handleAddMovieModalVisibility = useCallback((isVisible) => {
    setAddMovieModalVisible(isVisible);
    if(!isVisible){
      getMovies(selectedSortValue, selectedGenre);
    }
  });

  const handleEditMovieModalVisibility = useCallback((isVisible) => {
    setEditMovieModalVisible(isVisible);
    if(!isVisible){
      getMovies(selectedSortValue, selectedGenre);
    }
  });

  const handleDeleteMovieModalVisibility = useCallback((isVisible) => {
    setDeleteMovieModalVisible(isVisible);
  });

  const handleMovieDetailsVisibility = useCallback((isVisible, movieId) => {
    setMovieDetailsVisible(isVisible);
    setMovieId(movieId);
  });

  const handleFilterMovie = (genre) => {
    getMovies(selectedSortValue, genre);
    setSelectedGenre(genre);
    setMovieDetailsVisible(false);
  }

  const handleSortMovie = (sortValue) => {
    getMovies(sortValue, selectedGenre);
    setSelectedSortValue(sortValue);
    setMovieDetailsVisible(false);
  }

  const handleDeleteMovieSubmit = async () => {
    setDeleteMovieModalVisible(false);
    setMovieDetailsVisible(false);
    await deleteMovie(movieId);
    getMovies(selectedSortValue, selectedGenre);
  }

  const handleClose = () => {
    alert("Semoetesla");
  }

  const getMovieDetailsData = () => {
    return movieItems.find((m) => m.id === movieId);
  };

  return (
    <>
      {isMovieDetailsVisible ? (
        <MovieDetails
          onCloseMovieDetailsClick={() => handleMovieDetailsVisibility(false)}
          movieDetailsData={getMovieDetailsData()}
        />
      ) : (
        <Header onAddMovieClick={() => handleAddMovieModalVisibility(true)} />
      )}
      <ErrorBoundary>
        <Content
          onEditMovieClick={() => handleEditMovieModalVisibility(true)}
          onDeleteMovieClick={() => handleDeleteMovieModalVisibility(true)}
          onMovieDetailsClick={handleMovieDetailsVisibility}
          onFilterMovieClick={handleFilterMovie}
          onSortMovieClick={handleSortMovie}
          items={movieItems}
          totalAmount={totalAmount}
          selectedGenre={selectedGenre}
        />
      </ErrorBoundary>
      <Footer />
      {isAddMovieModalVisible && (
        <AddMovieModal
          onCloseMovieModalClick={() => handleAddMovieModalVisibility(false)}
          testFunc={() => handleClose()}
        />
      )}
      {isEditMovieModalVisible && (
        <EditMovieModal
          onCloseMovieModalClick={() => handleEditMovieModalVisibility(false)}          
          movieItem={getMovieDetailsData()}
        />
      )}
      {isDeleteMovieModalVisible && (
        <DeleteMovieModal
          onCloseMovieModalClick={() => handleDeleteMovieModalVisibility(false)}       
          onDeleteMovieSubmitClick={handleDeleteMovieSubmit}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    movieItems: getMovieItems(state),
    totalAmount: getMoviesTotalAmount(state),
  };
};

export default connect(mapStateToProps, { getMovies, deleteMovie })(App);

