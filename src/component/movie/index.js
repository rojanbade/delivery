import React from "react";
import { movie } from "../../constant";
import { Link } from "react-router";

class MovieList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="movie-list">
        {movie.map((item) => {
          return (
            <div key={item.id} className="movies">
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <p>{item.description}</p>
              <Link to={`/movie/${item.id}`}>View</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
