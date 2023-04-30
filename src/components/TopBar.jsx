import React, { Component } from "react";
import logo from "../assets/images/gunam_logo.png";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div className="navBar">
        <nav className="navbar navbar-light navbar-expand">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="150" alt="Gunam Logo" />
            &nbsp;&nbsp; Solaris
          </Link>
          <ul className="navbar-nav">
            <li className="">
              <Link className="navbar-item" to="/login">
                Login
              </Link>
            </li>
            &nbsp;&nbsp;
            <li className="">
              <Link className="navbar-item" to="/signUp">
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopBar;
