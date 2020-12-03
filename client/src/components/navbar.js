import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand ml-5 mr-5">
          Emperors
        </Link>
        <Link to="/Politicians" className="navbar-brand ml-5 mr-5">
          Politicians
        </Link>
        <Link to="/Enemies" className="navbar-brand ml-5 mr-5">
          Enemies
        </Link>
        <Link to="/Legions" className="navbar-brand ml-5 mr-5">
          Imperial Legions
        </Link>
        <Link to="/Cities" className="navbar-brand ml-5 mr-5">
          Cities
        </Link>
      </nav>
    );
  }
}
