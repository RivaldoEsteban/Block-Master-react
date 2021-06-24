import React, { useState, useEffect, useRef } from "react";
import "./main-style.css";
import Movie from "../movie/movie";
import { Switch, Route } from "react-router-dom";
import AllMovies from "./allMovies/allMovies";
import LeastValued from "./leastValued/leastValued";
import MostVlued from "./mostValued/mostValued";
import SearchMovie from "./searchMovie/search";

// function MovieList({ data, filter, setFilter, input }) {
//   switch (filter) {
//     case "mostValued":
//       return data
//         .filter((movie) => {
//           if (movie.vote_average > 7) {
//             return true;
//           }
//         })
//         .map((movie) => {
//           return <Movie movie={movie} />;
//         });
//       break;
//     case "leastValued":
//       return data
//         .filter((movie) => {
//           if (movie.vote_average < 7) {
//             return true;
//           }
//         })
//         .map((movie) => {
//           return <Movie movie={movie} />;
//         });

//       break;

//     case "searchName":
//       return data
//         .filter((movie) => {
//           if (movie.title.toLowerCase() == input.current.value.toLowerCase()) {
//             return true;
//           }
//         })
//         .map((movie) => {
//           return <Movie movie={movie} />;
//         });

//       break;

//     default:
//       return data.map((movie) => {
//         return <Movie movie={movie} />;
//       });
//   }
// }

function Main({ filter, setContainer, data, setFilter, input }) {
  const movieContainer = useRef("null");
  setContainer(movieContainer);
  return (
    <main className="main">
      <h1 className="title-section">Todas las películas</h1>
      <section className="movies" id="movies-container" ref={movieContainer}>
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
          <Route path="/Block-Master-react/inputMovie" exact>
            <SearchMovie data={data} input={input} />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default Main;
