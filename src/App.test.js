import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./components/App";
import Home from "./components/Home";
import { moviesReducer } from "./redux/reducers/moviesReducer";


describe("App", () => {
  it("renders App component", async () => {
    render(<App />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();    
  });
});

const renderWithRedux = (
  component,
  { initialState, store = createStore(moviesReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Redux testing", () => {
  it("checks initial state", () => {
    const { getByText } = renderWithRedux(<Home />);
    expect(getByText(/FIND YOUR MOVIE/i)).toBeInTheDocument();
  });
});