import React from "react";
import "./styles.css";
import Row from "./row";
import requests from "./requests";
import Banner from "./banner";
import Navbar from "./navbar";
import Footer from "./footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default App;
