import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "./../../axios";
import YouTube from "react-youtube";
import "./styles.css";

const Detail = () => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [movieId, setMovieId] = useState(searchParams.get("detail"));
  const [detailMovie, setDetailMovie] = useState("");

  useEffect(() => {
    (async () => {
      const key = "1cbcb64c17acb19db80ea5084e209e62";
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDetailMovie(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (detailMovie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${detailMovie}/videos?api_key=1cbcb64c17acb19db80ea5084e209e62`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div>
      <div className="detail-movie-info">
        <img
          className="detail--image"
          onClick={() => handleClick(detailMovie.id)}
          src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
          alt={detailMovie.title}
        />
        <h1>{detailMovie.title}</h1>
        <p>{detailMovie.overview}</p>
        <p>RELEASE DATE: {detailMovie.release_date}</p>
        <p>RATING: {detailMovie.vote_average}</p>
      </div>
      <div className="trailer-video">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Detail;
