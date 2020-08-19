import React, { Component } from "react";
import "../styles/mainScreen.css";

class MainScreen extends Component {
  state = {};
  render() {
    return (
      <div id="mainPage">
        <div id="leftSide" className="sideBar">
          part1
        </div>
        <div id="pageContent">part2</div>
        <div id="rightSide" className="sideBar">
          part3
        </div>
      </div>
    );
  }
}

export default MainScreen;
