import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Header from "./header/Header";
import Content from "./content/Content";
import ErrorBoundary from "./ErrorBoundary";
import AddMovieModal from "./content/movies/modal/AddMovieModal";
import EditMovieModal from "./content/movies/modal/EditMovieModal";
import DeleteMovieModal from "./content/movies/modal/DeleteMovieModal";
import MovieDetails from "./content/movies/movieDetails/movieDetails";

import { getMovies, deleteMovie } from "../redux/actions/thunks";
import {
  getMovieItems,
  getMoviesTotalAmount,
} from "../redux/selectors/selectors";

import "../index.css";

const Home = (props) => {
  const [isAddMovieModalVisible, setAddMovieModalVisible] = useState(false);
  const [isEditMovieModalVisible, setEditMovieModalVisible] = useState(false);
  const [isDeleteMovieModalVisible, setDeleteMovieModalVisible] =
    useState(false);
  const [isMovieDetailsVisible, setMovieDetailsVisible] = useState(false);
  
  let [searchParams, setSearchParams] = useSearchParams();
  let genreParam = searchParams.get("genre") || "";
  let searchQueryParam = searchParams.get("searchQuery") || "";
  let sortByParam = searchParams.get("sortBy") || "release_date";
  let movieIdParam = searchParams.get("movie") || "";

  const { movieItems, totalAmount, getMovies, deleteMovie } = props;

  useEffect(() => {
    getMovies(sortByParam, genreParam, searchQueryParam);
  }, []);

  const handleAddMovieModalVisibility = useCallback((isVisible) => {
    setAddMovieModalVisible(isVisible);
    if (!isVisible) {
      getMovies(sortByParam, genreParam, searchQueryParam);
    }
  });

  const handleEditMovieModalVisibility = useCallback((isVisible) => {
    setEditMovieModalVisible(isVisible);
    if (!isVisible) {
      getMovies(sortByParam, genreParam, searchQueryParam);
    }
  });

  const handleDeleteMovieModalVisibility = useCallback((isVisible) => {
    setDeleteMovieModalVisible(isVisible);
  });

  const handleMovieDetailsVisibility = useCallback((isVisible, movieId) => {
    setMovieDetailsVisible(isVisible);
    setSearchParams({ genre: genreParam, searchQuery: searchQueryParam, sortBy: sortByParam, movie: movieId});
  });

  const handleFilterMovie = (genre) => {
    getMovies(sortByParam, genre, searchQueryParam);
    setSearchParams({ genre: genre, searchQuery: searchQueryParam, sortBy: sortByParam });
    setMovieDetailsVisible(false);
  };

  const handleSortMovie = (sortValue) => {
    getMovies(sortValue, genreParam, searchQueryParam);
    setSearchParams({ genre: genreParam, searchQuery: searchQueryParam, sortBy: sortValue });
    setMovieDetailsVisible(false);
  };

  const handleDeleteMovieSubmit = async () => {
    setDeleteMovieModalVisible(false);
    setMovieDetailsVisible(false);
    await deleteMovie(movieIdParam);
    getMovies(sortByParam, genreParam, searchQueryParam);
  };

  const handleSearchMovie = () => {   
    getMovies(sortByParam, genreParam, searchQueryParam);
  };

  const getMovieDetailsData = () => {      
    return movieItems.find((m) => m.id === parseInt(movieIdParam, 10));
  };

  return (
    <>
      {isMovieDetailsVisible ? (
        <MovieDetails
          onCloseMovieDetailsClick={() => handleMovieDetailsVisibility(false)}
          movieDetailsData={getMovieDetailsData()}
        />
      ) : (
        <Header
          onAddMovieClick={() => handleAddMovieModalVisibility(true)}
          onSearchMovieClick={handleSearchMovie}
        />
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
          selectedGenre={genreParam}
        />
      </ErrorBoundary>

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

export default connect(mapStateToProps, { getMovies, deleteMovie })(Home);
