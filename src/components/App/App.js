import React, { Component } from "react";
import Header from "../Header";
import RandomPlanets from "../RandomPlanets";
import ItemList from "../ItemList";

import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="main-section">
        <Header />
        <RandomPlanets />
        <ItemList />
      </div>
    );
  }
}
