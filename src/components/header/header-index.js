import React, { useRef } from "react";
import "./header-style.css";
import { Link } from "react-router-dom";

function Header({ setInput }) {
  const inputValue = useRef(null);

  function searchMovie(event) {
    event.preventDefault();
    setInput(inputValue.current.value);
    console.log("click");
  }

  return (
    <header className="header">
      <img src="./images/logo.png" alt="logo de la página" />
      <ul className="list-a">
        <Link to="/Block-Master-react/">
          <li id="allMovies">
            <a href="#">Todas</a>
          </li>
        </Link>
        <Link to="/Block-Master-react/mostValued">
          <li id="mostValued">
            <a href="#">Más valoradas</a>
          </li>
        </Link>
        <Link to="/Block-Master-react/leastValued">
          <li id="leastValued">
            <a href="#">Menos valoradas</a>
          </li>
        </Link>
      </ul>
      <form
        className="form"
        id="form"
        aria-label="formulario-header"
        onSubmit={searchMovie}
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
