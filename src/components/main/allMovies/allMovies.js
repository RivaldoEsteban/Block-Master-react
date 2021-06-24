import React from "react";
import Movie from "../../movie/movie";

function AllMovies({ data }) {
  return data.map((movie) => {
    return <Movie movie={movie} />;
  });
}

export default AllMovies;
