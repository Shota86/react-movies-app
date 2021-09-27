import React, { Component } from "react";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import ErrorBoundary from "./ErrorBoundary";

import "../index.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ErrorBoundary>
          <Content />
        </ErrorBoundary>       
        <Footer />
      </>
    );
  }
}

export default App;
