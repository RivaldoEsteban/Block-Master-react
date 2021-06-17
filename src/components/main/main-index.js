import React, { useRef, useEffect } from "react";
import "./main-style.css";
import moviesData from "../../movies-data";
import Movie from "../movie/movie";

function Main({ setContainer }) {
  const movieContainer = useRef(null);
  useEffect(() => {
    setContainer(movieContainer);
  }, []);
  return (
    <main className="main">
      <h1 className="title-section">Todas las películas</h1>
      <section className="movies" id="movies-container" ref={movieContainer}>
        {moviesData.map((movie, id) => {
          return <Movie movie={movie} id={id} />;
        })}
      </section>
    </main>
  );
}

export default Main;
