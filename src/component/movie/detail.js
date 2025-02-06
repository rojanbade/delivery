import React from "react";
import { useParams } from "react-router";
import { movie } from "../../constant";

const MovieDetail = () => {
  let { id } = useParams();

  const movieDetail = movie.find((item) => item.id === parseInt(id));
  console.log(movieDetail);

  return (
    <div>
      <h3>{movieDetail.category}</h3>
      <h1>{movieDetail.name}</h1>

      <p>{movieDetail.description}</p>
    </div>
  );
};

export default MovieDetail;
