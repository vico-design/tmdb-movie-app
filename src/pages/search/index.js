import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./../../components/movieCard";
import Pagination from "./../../components/pagination";
import "./styles.css";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [movies, setMovies] = useState([]);
  const [pagination, setPagination] = useState({});
  const [query, setQuery] = useState(searchParams.get("query"));
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const key = "1cbcb64c17acb19db80ea5084e209e62";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`;
      try {
        const res = await fetch(url);
        const { results, page, total_pages, total_results } = await res.json();
        setMovies(results);
        setPagination({
          pageInfo: page,
          totalPages: total_pages,
          totalResults: total_results,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query, page]);

  const changePage = (action) => {
    const newPage = action === "next" ? page + 1 : page - 1;
    setPage(newPage);
  };

  console.log(movies);
  console.log(pagination);

  return (
    <div className="search-component">
      <div className="search-movies-component">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
      <Pagination pagination={pagination} changePage={changePage} />
    </div>
  );
};

export default Search;
