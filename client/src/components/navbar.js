import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Emperors
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/politician" className="nav-link">
                Politicians
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/enemy" className="nav-link">
                Enemies
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/city" className="nav-link">
                Cities
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/legion" className="nav-link">
                Legions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
