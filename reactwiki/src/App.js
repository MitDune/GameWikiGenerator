import React from "react";
import "./styles/App.css";
import NavBar from "./components/Navbar.jsx";
import MainScreen from "./components/mainScreen";

function App() {
  return (
    <div id="app">
      <NavBar />
      <MainScreen />
    </div>
  );
}

export default App;
