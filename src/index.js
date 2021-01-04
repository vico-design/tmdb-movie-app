import react from "react";
import ReactDOM from "react-dom";
// import SearchMovies from "./components/searchMovies/index";
import App from "./App";

const Main = () => {
  return (
    <div className="container">
      <App />
      {/* <h1 className="title">Movie Search</h1>
      <SearchMovies /> */}
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
