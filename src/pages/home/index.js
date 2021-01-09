import React from "react";
import Row from "./../../components/row";
import Banner from "./../../components/banner";
import genresMovies from "./../../genresMovies";

const Home = () => {
  return (
    <div className="app">
      <Banner />
      {genresMovies.map((movie) => (
        <Row
          key={movie.title}
          title={movie.title}
          fetchUrl={movie.fetchUrl}
          isLargeRow={movie.isLargeRow}
        />
      ))}
    </div>
  );
};

export default Home;
