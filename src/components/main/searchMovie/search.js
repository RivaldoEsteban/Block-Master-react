import React from "react";
import Movie from "../../movie/movie";

function SearchMovie({ data, input }) {
  return data
    .filter((movie) => {
      if (movie.title.toLowerCase() == input.current.value.toLowerCase()) {
        return true;
      }
    })
    .map((movie) => {
      return <Movie movie={movie} />;
    });
}

export default SearchMovie;
