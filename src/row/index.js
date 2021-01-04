import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "./../axios";
import "./styles.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row--posters">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <img
              className={`row--poster ${isLargeRow && "row--posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              key={movie.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;
