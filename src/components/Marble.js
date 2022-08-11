import React, { Component } from "react";
import { colorMapping } from "../colorMapping";

export default class Marble extends Component {
  constructor(props) {
    super(props);
    this.state = {color: props.color}
  }
  render() {
    return <img src={colorMapping[this.state.color]} alt='marble' className="marble"/>;
  }
}
