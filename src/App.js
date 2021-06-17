import "./App.css";
import Header from "./components/header/header-index";
import Hero from "./components/hero/hero-index";
import Main from "./components/main/main-index";
import React, { useState } from "react";
function App() {
  const [container, setContainer] = useState();
  return (
    <div className="wrapper">
      <Header container={container} />
      <Hero />
      <Main setContainer={setContainer} />
    </div>
  );
}

export default App;
