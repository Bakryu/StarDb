import React, { Component } from "react";
import "./itemList.css";

export default class ItemList extends Component {
  render() {
    return (
      <div className="section_decor item-list_section ">
        <span className="list-item">Luke Skywallker</span>
        <span className="list-item">Darth Vader</span>
        <span className="list-item">R2-D2</span>
      </div>
    );
  }
}
