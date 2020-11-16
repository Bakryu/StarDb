import React, { Component } from "react";
import Header from "../Header";
import RandomPlanets from "../RandomPlanets";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

import "./app.css";

export default class App extends Component {
  state = {
    selectedPerson: null,
  };
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {
    return (
      <div className="main-section">
        <Header />
        <RandomPlanets />
        <div className="content-wrapper">
          <ItemList onPersonSelected={this.onPersonSelected} />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
