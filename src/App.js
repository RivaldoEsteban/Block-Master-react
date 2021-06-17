import "./App.css";
import Header from "./components/header/header-index";
import Hero from "./components/hero/hero-index";
import Main from "./components/main/main-index";
import React, { useState } from "react";
function App() {
  const [container, setContainer] = useState();
  const [filter, setFilter] = useState("allMovies");
  return (
    <div className="wrapper">
      <Header setFilter={setFilter} />
      <Hero />
      <Main setContainer={setContainer} filter={filter} />
    </div>
  );
}

export default App;
