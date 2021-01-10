import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => {
  const { push, location } = useHistory();
  const { search } = location;

  const handleClick = () => {
    const newPath = `${search}&detail=${movie.id}`;
    push(`/detail${newPath}`);
  };

  return (
    <div>
      <div>
        {movie.backdrop_path && (
          <img
            key={movie.id}
            onClick={handleClick}
            className="search-movie"
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
