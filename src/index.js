import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./redux/store";
import App from "./components/App";
import Home from "./components/Home";
import Header from "./components/header/Header";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />          
          <Route
            path="*"
            element={             
                <p>Page not found!</p>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
