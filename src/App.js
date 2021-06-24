import "./App.css";
import Header from "./components/header/header-index";
import Hero from "./components/hero/hero-index";
import Main from "./components/main/main-index";
import React, { useState } from "react";
import moviesData from "./movies-data";
import WatchMovie from "./components/movie/presentationMovie";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [data, setData] = useState(moviesData);
  const [container, setContainer] = useState();
  const [filter, setFilter] = useState("allMovies");
  const [input, setInput] = useState();

  return (
    <div className="wrapper">
      <Header
        setFilter={setFilter}
        container={container}
        data={data}
        setInput={setInput}
      />
      <Hero />
      <Main
        filter={filter}
        setContainer={setContainer}
        data={data}
        setFilter={setFilter}
        input={input}
      />
      {/* <WatchMovie /> */}
    </div>
  );
}

export default App;
