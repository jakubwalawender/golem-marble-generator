import React, { Component } from "react";
import Marble from "./Marble";

export default class Synagogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      synagogue: this.roll(props.options),
    };
  }
  roll(options) {
    let synagogue = new Array(options.pathsCount);
    for (var i = 0; i < options.pathsCount; i++) {
      synagogue[i] = [];
    }
    let marblesList = this.shuffle(options.colorConfig);
    marblesList.forEach((element) => {
      let path;
      do {
        path = Math.floor(Math.random() * options.pathsCount + 1);
      } while (synagogue[path - 1].length >= 5);
      synagogue[path - 1].push(element);
    });
    return synagogue;
  }
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  render() {
    return (
      <div class="synagogue">
        {this.state.synagogue.map((column) => {
          return (
            <div class="track">{column.map((marble) => {
                return (<Marble color={marble}></Marble>)
            })}</div>
          );
        })}
      </div>
    );
  }
}
