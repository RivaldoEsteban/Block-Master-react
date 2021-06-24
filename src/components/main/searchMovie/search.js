import React from "react";
import Movie from "../../movie/movie";

function SearchMovie({ data, input }) {
  console.log(input);
  const movie = data
    .filter((movie) => {
      if (movie.title.toLowerCase() == input.toLowerCase()) {
        return true;
      }
    })
    .map((movie) => {
      return (
        <div className="search-movie">
          <h1 className="title-section">Película encontrada</h1>
          <Movie movie={movie} />
        </div>
      );
    });

  return movie;
}

export default SearchMovie;
