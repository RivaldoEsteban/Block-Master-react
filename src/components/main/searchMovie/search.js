import React from "react";
import Movie from "../../movie/movie";

function SearchMovie({ data, input }) {
  if (!input) return null;
  const movie = data
    .filter((movie) => {
      if (movie.title.toLowerCase().startsWith(input.toLowerCase())) {
        return true;
      }
    })
    .map((movie) => {
      return <Movie movie={movie} />;
    });

  return movie;
}

export default SearchMovie;
