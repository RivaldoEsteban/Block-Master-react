import React, { useState, useEffect, useRef } from "react";
import "./main-style.css";
import Movie from "../movie/movie";
import { Switch, Route } from "react-router-dom";
import AllMovies from "./allMovies/allMovies";
import LeastValued from "./leastValued/leastValued";
import MostVlued from "./mostValued/mostValued";
import SearchMovie from "./searchMovie/search";

function Main({ data, input }) {
  return (
    <main className="main">
      {input ? <SearchMovie data={data} input={input} /> : ""}
      <h1 className="title-section">Todas las películas</h1>
      <section className="movies" id="movies-container">
        <Switch>
          <Route path="/Block-Master-react/" exact>
            <AllMovies data={data} />
          </Route>
          <Route path="/Block-Master-react/leastValued" exact>
            <LeastValued data={data} />
          </Route>
          <Route path="/Block-Master-react/mostValued" exact>
            <MostVlued data={data} />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default Main;
