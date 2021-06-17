import React from "react";
import "./header-style.css";
import moviesData from "../../movies-data";
import Movie from "../movie/movie";
import MovieContainer from "../movie/movie-container";

function Header({ setFilter }) {
  function allMovies() {
    setFilter("allMovies");
    // console.log(moviesData);
    // const movieContainer = container.current;
    // movieContainer. = moviesData.map((movie, id) => {
    //   return <Movie movie={movie} id={id} />;
    // });
  }

  function mostValued() {
    setFilter("mostValued");
    // moviesData.map((movie) => {
    //   if (movie.vote_average > 7) {
    //     console.log(movie);
    //   }
    // });
  }

  function leastValued() {
    setFilter("leastValued");
    // moviesData.map((movie) => {
    //   if (movie.vote_average < 7) {
    //     console.log(movie);
    //   }
    // });
  }
  return (
    <header className="header">
      <img src="images/logo.png" alt="" />
      <ul className="list-a">
        <li id="allMovies" onClick={allMovies}>
          <a href="#">Todas</a>
        </li>
        <li id="mostValued" onClick={mostValued}>
          <a href="#">Más valoradas</a>
        </li>
        <li id="leastValued" onClick={leastValued}>
          <a href="#">Menos valoradas</a>
        </li>
      </ul>
      <form className="form" id="form" aria-label="formulario-header">
        <input type="text" />
        <button type="submit" role="button">
          <img src="images/icons/search.png" alt="icon search" />
        </button>
      </form>
    </header>
  );
}

export default Header;
