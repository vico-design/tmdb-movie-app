import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "./../../axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const API_KEY = "1cbcb64c17acb19db80ea5084e209e62";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/discover/tv?api_key=${API_KEY}&with_networks=213`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner--contents">
        <h1 className="banner--title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner--buttons">
          <button className="banner--button">Play</button>
          <button className="banner--button">My List</button>
        </div>
        <h3 className="banner--description">
          {truncate(movie?.overview, 150)}
        </h3>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
