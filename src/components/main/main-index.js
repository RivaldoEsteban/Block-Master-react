import React, { useState, useEffect, useRef } from "react";
import "./main-style.css";
import Movie from "../movie/movie";

function MovieList({ data, filter, setFilter, input }) {
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

    case "searchName":
      return data
        .filter((movie) => {
          if (movie.title.toLowerCase() == input.current.value.toLowerCase()) {
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

function Main({ filter, setContainer, data, setFilter, input }) {
  const movieContainer = useRef("null");
  setContainer(movieContainer);
  return (
    <main className="main">
      <h1 className="title-section">Todas las películas</h1>
      <section className="movies" id="movies-container" ref={movieContainer}>
        <MovieList
          data={data}
          filter={filter}
          setFilter={setFilter}
          input={input}
        />
      </section>
    </main>
  );
}

export default Main;
