import "./App.css";
import Header from "./components/header/header-index";
import Hero from "./components/hero/hero-index";
import Main from "./components/main/main-index";
import React, { useState } from "react";
import moviesData from "./movies-data";

function App() {
  const [data, setData] = useState(moviesData);
  const [input, setInput] = useState("");

  return (
    <div className="wrapper">
      <Header data={data} setInput={setInput} key="header" />
      <Hero />
      <Main data={data} input={input} ke="main" />
    </div>
  );
}

export default App;
