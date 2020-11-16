import React, { Component } from "react";
import SwapiService from "../../services/SwapiService.js";
import Spinner from "../Spinner";
import "./itemList.css";

export default class ItemList extends Component {
  SwapiService = new SwapiService();
  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.SwapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-item"
          key={id}
          onClick={() => {
            this.props.onPersonSelected(id);
          }}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    const items = this.renderItems(peopleList);
    return <ul className="section_decor item-list_section ">{items}</ul>;
  }
}
