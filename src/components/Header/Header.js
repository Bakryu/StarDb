import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="logo">Star DB</span>
        <span className="category">People</span>
        <span className="category">Planets</span>
        <span className="category">Starships</span>
      </div>
    );
  }
}
