import React, { useRef } from "react";
import "./header-style.css";
function Header({ setFilter, setInput }) {
  const inputValue = useRef(null);

  function allMovies() {
    setFilter("allMovies");
  }

  function mostValued() {
    setFilter("mostValued");
  }

  function leastValued() {
    setFilter("leastValued");
  }

  function search() {
    setFilter("searchName");
    setInput(inputValue);

    // const movieContainer = container.current;
    // movieContainer.innerHTML = data
    //   .filter((movie) => {
    //     if (
    //       movie.title.toLowerCase() == inputValue.current.value.toLowerCase()
    //     ) {
    //       return true;
    //     }
    //   })
    //   .map((movie, id) => {
    //     return `
    //       <div className="movie" id=${id}>
    //         <h1 className="movie-title">${movie.title}</h1>
    //         <img src=${movie.poster_path} alt="" className="movie-image" />
    //         </div>
    //         `;
    //   });
    // <button>
    //   <img src="images/icons/star.png" alt="icon star" />
    //   <p>${movie.vote_average}</p>
    // </button>
  }
  return (
    <header className="header">
      <img src="./images/logo.png" alt="logo de la página" />
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
      <form
        className="form"
        id="form"
        aria-label="formulario-header"
        onSubmit={search}
      >
        <input type="text" ref={inputValue} />
        <button type="submit" role="button">
          <img src="./images/icons/search.png" alt="icono del buscador" />
        </button>
      </form>
    </header>
  );
}

export default Header;
