import "./styles.css";
import React, { useEffect, useState } from "react";
import SearchMovies from "../searchMovies";
const Navbar = () => {
  const [show, handleShow] = useState(false);

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

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <img
        className="nav--logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <SearchMovies />
      <img
        className="nav--avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar logo"
      />
    </div>
  );
};

export default Navbar;
