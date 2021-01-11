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
  const [detailMovie, setDetailMovie] = useState({});
  const [button, setButton] = useState(true);

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
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (detailMovie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setButton(!button);
    } else {
      let trailerurl = await axios.get(
        `/movie/${detailMovie}/videos?api_key=1cbcb64c17acb19db80ea5084e209e62`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
      setButton(!button);
    }
  };

  return (
    <div className="movie-info">
      <header
        className="detail--image"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <h1 className="detail-image-title">{detailMovie.title}</h1>
        <button
          className="detail--image--button"
          onClick={() => handleClick(detailMovie.id)}
        >
          {button ? "Play" : "Close"}
        </button>
        <div className="img-fadeBottom" />
      </header>
      <div className="text-detail">
        <p className="detail-description">{detailMovie.overview}</p>

        <div className="release-rating">
          <p className="detail-release">
            <span className="span">RELEASE DATE: </span>
            {detailMovie.release_date}
          </p>
          <p className="detail-rating">
            <span className="span">RATING: </span>
            {detailMovie.vote_average}
          </p>
          {detailMovie.genres && (
            <p className="genres">
              <span className="span">GENRES:</span>
              {detailMovie.genres.map((gen) => (
                <li className="genres-list" key={gen.name}>
                  {gen.name}
                </li>
              ))}
            </p>
          )}
        </div>
      </div>
      <div className="trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Detail;
