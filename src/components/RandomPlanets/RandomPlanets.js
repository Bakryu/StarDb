import React, { Component } from "react";
import "./randomPlanets.css";
import SwapiServise from "../../services/SwapiServise.js";
import Spinner from "../Spinner";

export default class RandomPlanets extends Component {
  swapiServise = new SwapiServise();
  state = {
    planet: {},
    loading: true,
  };
  constructor() {
    super();
    this.updatePlanet();
  }
  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {};
  updatePlanet() {
    const id = Math.floor(Math.random() * 10) + 2;
    this.swapiServise
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }
  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet section_decor">
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotation, diameter } = planet;
  return (
    <React.Fragment>
      <div className="planet-img_wrapper">
        <img
          className="planet-img"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
        />
      </div>
      <div className="description_wrapper">
        <span className="planet__name">{name}</span>
        <ul className="planet__description-list">
          <li className="planet__description">Population- {population}</li>
          <li className="planet__description">Rotation period- {rotation}</li>
          <li className="planet__description">Diameter- {diameter}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
