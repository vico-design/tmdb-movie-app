import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">Hello VICO World</h1>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
