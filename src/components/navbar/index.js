import "./styles.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [query, setQuery] = useState("");

  const { push } = useHistory();

  //interesting function to show the background of the nav when we scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  //save userInput in the URL
  const searchMovies = () => {
    push(`/search?query=${query}`);
  };

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <Link to="/">
        <img
          className="nav--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
      </Link>
      <form className="form" onSubmit={searchMovies}>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Titles, people, genres"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
      <img
        className="nav--avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar logo"
      />
    </div>
  );
};

export default Navbar;
