import React from "react";
import "./styles.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => {
  return (
    <div>
      {movie.backdrop_path && (
        <img
          key={movie.id}
          className="search-movie"
          src={`${base_url}${movie.backdrop_path}`}
          alt={movie.name}
        />
      )}
    </div>
  );
};

export default MovieCard;

//Use it when clicking the img.. so get more info about the movie
// <img
//   className="card--image"
//   src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
//   alt={movie.title + " poster"}
// />
// <div className="card--content">
//   <h3 className="card--title">{movie.title}</h3>
//   <p>
//     <small>RELEASE DATE: {movie.release_date}</small>
//   </p>
//   <p>
//     <small>RATING: {movie.vote_average}</small>
//   </p>
//   <p className="card--desc">{movie.overview}</p>
// </div>
