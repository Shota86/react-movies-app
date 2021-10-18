import React, { useState } from "react";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import ErrorBoundary from "./ErrorBoundary";
import AddMovieModal from "./content/movies/modal/AddMovieModal";
import EditMovieModal from "./content/movies/modal/EditMovieModal";
import DeleteMovieModal from "./content/movies/modal/DeleteMovieModal";
import MovieDetails from "./content/movies/movieDetails/movieDetails";

import "../index.css";

import pulpFiction from "../assets/pulp-fiction.png";
import bohemian from "../assets/bohemian.png";
import killBill from "../assets/kill-bill.png";
import avengers from "../assets/avengers.png";
import inception from "../assets/inception.png";
import reserviordogs from "../assets/reservior-dogs.png";

let items = [
  {
    id: 1,
    title: "Pulp Fiction",
    genre: "Action, Criminal",
    image: pulpFiction,
  },
  {
    id: 2,
    title: "Bohemian Rhapsody",
    genre: "Drama, Music",
    image: bohemian,
  },
  {
    id: 3,
    title: "Kill Bill",
    genre: "Action",
    image: killBill,
  },
  {
    id: 4,
    title: "Avengers",
    genre: "Action, Adventure",
    image: avengers,
  },
  {
    id: 5,
    title: "Inception",
    genre: "Action, Adventure",
    image: inception,
  },
  {
    id: 6,
    title: "Reserviordogs",
    genre: "Action Criminal",
    image: reserviordogs,
  },
];

const App = () => {

  const [isAddMovieModalVisible, setAddMovieModalVisible] = useState(false);
  const [isEditMovieModalVisible, setEditMovieModalVisible] = useState(false);
  const [isDeleteMovieModalVisible, setDeleteMovieModalVisible] = useState(false);
  const [isMovieDetailsVisible, setMovieDetailsVisible] = useState(false);
  const [movieId, setMovieId] = useState(undefined);

  const handleAddMovieModalVisibility = (isVisible) => {
    setAddMovieModalVisible(isVisible);
  };

  const handleEditMovieModalVisibility = (isVisible) => {
    setEditMovieModalVisible(isVisible);
  };

  const handleDeleteMovieModalVisibility = (isVisible) => {
    setDeleteMovieModalVisible(isVisible);
  };

  const handleMovieDetailsVisibility = (isVisible, movieId) => {
    setMovieDetailsVisible(isVisible);
    setMovieId(movieId);
  };

  const getMovieDetailsData = () => {
    return items.find((m) => m.id === movieId);
  };

  return (
    <>
      {isMovieDetailsVisible ? (
        <MovieDetails
          onCloseMovieDetailsClick={() =>
            handleMovieDetailsVisibility(false)
          }
          movieDetailsData={getMovieDetailsData()}
        />
      ) : (
        <Header
          onAddMovieClick={() => handleAddMovieModalVisibility(true)}
        />
      )}
      <ErrorBoundary>
      <Content
        onEditMovieClick={() => handleEditMovieModalVisibility(true)}
        onDeleteMovieClick={() => handleDeleteMovieModalVisibility(true)}
        onMovieDetailsClick={handleMovieDetailsVisibility}
        items={items}
      />
      </ErrorBoundary>
      <Footer />
      {isAddMovieModalVisible && (
        <AddMovieModal
          onCloseMovieModalClick={() =>
            handleAddMovieModalVisibility(false)
          }
        />
      )}
      {isEditMovieModalVisible && (
        <EditMovieModal
          onCloseMovieModalClick={() =>
            handleEditMovieModalVisibility(false)
          }
        />
      )}
      {isDeleteMovieModalVisible && (
        <DeleteMovieModal
          onCloseMovieModalClick={() =>
            handleDeleteMovieModalVisibility(false)
          }
        />
      )}
    </>
  );
};

export default App;
