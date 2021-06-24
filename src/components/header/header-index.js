import React, { useRef } from "react";
import "./header-style.css";
import { Link } from "react-router-dom";

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
  }
  return (
    <header className="header">
      <img src="./images/logo.png" alt="logo de la página" />
      <ul className="list-a">
        <Link to="/Block-Master-react/">
          <li id="allMovies" onClick={allMovies}>
            <a href="#">Todas</a>
          </li>
        </Link>
        <Link to="/Block-Master-react/mostValued">
          <li id="mostValued" onClick={mostValued}>
            <a href="#">Más valoradas</a>
          </li>
        </Link>
        <Link to="/Block-Master-react/leastValued">
          <li id="leastValued" onClick={leastValued}>
            <a href="#">Menos valoradas</a>
          </li>
        </Link>
        <Link to="/Block-Master-react/inputMovie"></Link>
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
