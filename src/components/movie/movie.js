import React from "react";

function Movie({ movie }) {
  return (
    <div className="movie" id={movie.id} key={movie.id}>
      <h1 className="movie-title">{movie.title}</h1>
      <img src={movie.poster_path} alt="" className="movie-image" />
      <button>
        <img src="images/icons/star.png" alt="icon star" />
        <p>{movie.vote_average}</p>
      </button>
    </div>
  );
}

export default Movie;
