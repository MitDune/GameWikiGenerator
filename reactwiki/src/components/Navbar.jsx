import React, { Component } from "react";
import "../styles/navbar.css";
import NavLogin from "./NavLogin";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav id="mainNav">
        <h1>This is the NavBar</h1>
        <h1>more text</h1>
        <h1>third item</h1>
        <NavLogin />
      </nav>
    );
  }
}

export default NavBar;
