import React from "react";
import "./styles.css";

const SearchMovies = () => {
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="What for a movie..?"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
