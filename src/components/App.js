import React, { Component } from "react";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import ErrorBoundary from "./ErrorBoundary";
import AddMovieModal from "./content/movies/modal/AddMovieModal";
import EditMovieModal from "./content/movies/modal/EditMovieModal";
import DeleteMovieModal from "./content/movies/modal/DeleteMovieModal";

import "../index.css";

class App extends Component {
  state = {
    isAddMovieModalVisible: false,
    isEditMovieModalVisible: false,
    isDeleteMovieModalVisible: false,
  };

  handleAddMovieModalVisibility = (isVisible) => {
    this.setState({ isAddMovieModalVisible: isVisible });
  };

  handleEditMovieModalVisibility = (isVisible) => {
    this.setState({ isEditMovieModalVisible: isVisible });
  };

  handleDeleteMovieModalVisibility = (isVisible) => {
    this.setState({ isDeleteMovieModalVisible: isVisible });
  };

  render() {
    const {
      isAddMovieModalVisible,
      isEditMovieModalVisible,
      isDeleteMovieModalVisible,
    } = this.state;

    return (
      <>
        <Header
          onAddMovieClick={() => this.handleAddMovieModalVisibility(true)}
        />
        <ErrorBoundary>
          <Content
            onEditMovieClick={() => this.handleEditMovieModalVisibility(true)}
            onDeleteMovieClick={() => this.handleDeleteMovieModalVisibility(true)}
          />
        </ErrorBoundary>
        <Footer />
        {isAddMovieModalVisible && (
          <AddMovieModal
            onCloseMovieModalClick={() =>
              this.handleAddMovieModalVisibility(false)
            }
          />
        )}
        {isEditMovieModalVisible && (
          <EditMovieModal
            onCloseMovieModalClick={() =>
              this.handleEditMovieModalVisibility(false)
            }
          />
        )}
        {isDeleteMovieModalVisible && (
          <DeleteMovieModal
            onCloseMovieModalClick={() =>
              this.handleDeleteMovieModalVisibility(false)
            }
          />
        )}
      </>
    );
  }
}

export default App;
