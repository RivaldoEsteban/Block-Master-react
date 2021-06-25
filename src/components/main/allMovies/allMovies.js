import React from "react";
import Movie from "../../movie/movie";

function AllMovies({ data }) {
  return data.map((movie, id) => {
    return <Movie movie={movie} key={id} />;
  });
}

export default AllMovies;
