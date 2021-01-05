import React, { useEffect } from "react";
import "./styles.css";
import Row from "./row";
import requests from "./requests";
import Banner from "./banner";
import Navbar from "./navbar";
import axios from "./axios";

const App = () => {
  //   const blabla = async () => {
  //     const results = await axios.get(requests.fetchActionMovies);
  //     console.log(results);
  //   };
  //   useEffect(() => {
  //     blabla();
  //   }, []);

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
