import React from "react";
import "./movie.css";

function WatchMovie({ movie }) {
  function closeMoviePreview() {
    const moviePreview = document.getElementById("movie-preview");
    moviePreview.style.display = "none";
  }
  return (
    <section className="movie-preview" id="movie-preview">
      <img
        src="images/icons/close.png"
        className="icon-closed"
        alt="icon-closed"
        onClick={closeMoviePreview}
      />
      <div className="movie-info-data">
        <div>
          <img
            src="images/infamous.png"
            className="image-movie"
            alt="image movie"
          />
        </div>
        <div className="info-movie">
          <h2>Infamous</h2>
          <p>
            Arielle nació en un pueblo pequeño, pero sueña con ser famosa. Tras
            conocer a Dean, un delincuente, la pareja empieza a asaltar negocios
            y presumir de sus fechorías en las redes sociales, en busca de una
            notoriedad manchada de sangre.
          </p>
          <div className="buttons">
            <button className="now">
              <img src="images/icons/play.png" alt="icon play" />
              ver ahora
            </button>
            <button className="later">
              <img src="images/icons/plus.png" alt="icon plus" />
              ver después
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchMovie;
