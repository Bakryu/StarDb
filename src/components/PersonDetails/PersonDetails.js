import React, { PureComponent } from "react";
import "./personDetails.css";
import SwapiService from "../../services/SwapiService.js";

export default class PersonDetails extends PureComponent {
  swapiService = new SwapiService();

  state = {
    person: null,
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }

  render() {
    if (!this.state.person) {
      return <span className="select-person">Select person</span>;
    } else {
      const { id, name, gender, birthYear, eyeColor } = this.state.person;

      return (
        <div className="person-details section_decor">
          <div className="image-wrapper">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=""
              className="card-image"
            />
          </div>
          <div className="card-body-wrapper">
            <h1 className="h1">{name}</h1>
            <span className="person-description">Gender- {gender}</span>
            <span className="person-description">Birth Year-{birthYear}</span>
            <span className="person-description">Eye Color-{eyeColor}</span>
          </div>
        </div>
      );
    }
  }
}
