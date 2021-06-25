import React from "react";
import Movie from "../../movie/movie";

function LeastValued({ data }) {
  return data
    .filter((movie) => {
      if (movie.vote_average < 7) {
        return true;
      }
    })
    .map((movie, id) => {
      return <Movie movie={movie} key={id} />;
    });
}

export default LeastValued;
