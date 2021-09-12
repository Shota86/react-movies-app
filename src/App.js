import React from "react";
import Counter from "./components/counter";
import Search from "./components/search";
import Genre from "./components/genre";

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      <Counter />
      <Search />
      <Genre />
    </div>
  );
}

export default App;
