import React, { Component } from "react";
import "./App.css";
import Synagogue from "./components/Synagogue";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="title">Golem Marble Generator</div>
        <Synagogue></Synagogue>
      </div>
    );
  }
}
