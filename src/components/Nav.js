import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          <Link to="/" className="logo">
            Gif Search
          </Link>
        </span>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/favorites">
                See your collection
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
