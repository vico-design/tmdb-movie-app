import React, { useState } from "react";
import "./styles.css";
import axios from "../../axios";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  //SHOW THE TRAILER BUT IN ANOTHER COMPONENT WITH MORE INFO LIKE ABOVE:
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=1cbcb64c17acb19db80ea5084e209e62`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div>
      <div>
        {movie.backdrop_path && (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className="search-movie"
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
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
