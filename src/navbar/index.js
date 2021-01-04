import "./styles.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        className="nav--logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
        alt="Netflix logo"
      />
      <img
        className="nav--avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Avatar logo"
      />
    </div>
  );
};

export default Navbar;
