import React, { useRef, useEffect, useState } from "react";
import "./main-style.css";
import moviesData from "../../movies-data";
import Movie from "../movie/movie";

function MovieList({ data, filter }) {
  switch (filter) {
    case "mostValued":
      return data
        .filter((movie) => {
          if (movie.vote_average > 7) {
            return true;
          }
        })
        .map((movie) => {
          return <Movie movie={movie} />;
        });
      break;
    case "leastValued":
      return data
        .filter((movie) => {
          if (movie.vote_average < 7) {
            return true;
          }
        })
        .map((movie) => {
          return <Movie movie={movie} />;
        });

      break;
    default:
      return data.map((movie) => {
        return <Movie movie={movie} />;
      });
  }
}
function Main({ filter }) {
  const [data, setData] = useState(moviesData);

  return (
    <main className="main">
      <h1 className="title-section">Todas las películas</h1>
      <section className="movies" id="movies-container">
        <MovieList data={data} filter={filter} />
      </section>
    </main>
  );
}

export default Main;
