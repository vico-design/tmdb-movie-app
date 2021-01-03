import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SearchMovies from "./components/searchMovies/index";

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">Hello VICO World</h1>
      <SearchMovies />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
