import React, { useState } from "react";
import "./styles.css";
import MovieCard from "../movieCard";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const key = "1cbcb64c17acb19db80ea5084e209e62";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="What for a movie..?"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {/* <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div> */}
    </div>
  );
};

export default SearchMovies;
