import React, { Component } from "react";
import "./App.css";
import Synagogue from "./components/Synagogue";
import { fourPlayers } from './playerCountOptions';
export default class App extends Component {
  render() {
    return (
      <div>
        <div class="title">Golem Marble Generator</div>
        <Synagogue options={fourPlayers}></Synagogue>
      </div>
    );
  }
}
