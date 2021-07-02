import React, { useRef } from "react";
import "./header-style.css";
import { Link, useHistory } from "react-router-dom";

function Header({ setInput }) {
  const history = useHistory();
  const inputValue = useRef(null);

  function searchMovie() {
    setInput(inputValue.current.value);
    const search = inputValue.current.value;
    history.push({ search: `?search=${search}` });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
  }

  const search = history.location.search;
  const params = new URLSearchParams(search);
  const getSearch = params.get("search");

  return (
    <header className="header">
      <Link to="/Block-Master-react/">
        <img src="./images/logo.png" alt="logo de la página" />
      </Link>
      <ul className="list-a">
        <li id="allMovies">
          <Link to="/Block-Master-react/">Todas</Link>
        </li>
        <li id="mostValued">
          <Link to="/Block-Master-react/mostValued">Más valoradas</Link>
        </li>
        <li id="leastValued">
          <Link to="/Block-Master-react/leastValued">Menos valoradas</Link>
        </li>
      </ul>
      <form
        className="form"
        id="form"
        aria-label="formulario-header"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          ref={inputValue}
          defaultValue={getSearch}
          onChange={searchMovie}
        />
        <img
          className="search"
          src="./images/icons/search.png"
          alt="icono del buscador"
        />
      </form>
    </header>
  );
}

export default Header;
