import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./../../components/movieCard";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get("query"));
  console.log(query);
  useEffect(() => {
    (async () => {
      const key = "1cbcb64c17acb19db80ea5084e209e62";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query]);

  return (
    <div className="search-result-component">
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default Search;
