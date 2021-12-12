import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./footer/Footer";

import "../index.css";

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
