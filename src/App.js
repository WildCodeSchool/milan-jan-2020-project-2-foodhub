import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";
import Icons from "./components/Icons";

import "./scss/styles.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Icons />
      <Suggestions />
      <Switch>
        <Route path="/recipe" component={Recipe} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
