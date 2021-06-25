import React from "react";
import "./main-style.css";
import { Switch, Route } from "react-router-dom";
import AllMovies from "./allMovies/allMovies";
import LeastValued from "./leastValued/leastValued";
import MostVlued from "./mostValued/mostValued";
import SearchMovie from "./searchMovie/search";
import { useLocation } from "react-router-dom";

function Main({ data }) {
  const location = useLocation();
  console.log({ location });

  const params = new URLSearchParams(location.search);
  // console.log(params);
  const search = params.get("search");
  console.log(search);
  // console.log(params.get("search"));

  return (
    <main className="main">
      <SearchMovie data={data} input={search} key="search-movie" />
      <h1 className="title-section">Todas las películas</h1>
      <section className="movies" id="movies-container">
        <Switch>
          <Route path="/Block-Master-react/" exact>
            <AllMovies data={data} key="all-movies" />
          </Route>
          <Route path="/Block-Master-react/leastValued" exact>
            <LeastValued data={data} key="least-movies" />
          </Route>
          <Route path="/Block-Master-react/mostValued" exact>
            <MostVlued data={data} key="most-movies" />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default Main;
