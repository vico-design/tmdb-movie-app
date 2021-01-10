import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import Detail from "./pages/detail";
import Footer from "./components/footer";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
