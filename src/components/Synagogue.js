import React, { Component } from "react";
import Marble from "./Marble";
import { Button, Form } from "react-bootstrap";
import { playerCounts } from "../playerCountOptions";

export default class Synagogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: playerCounts[0],
      synagogue: [],
    };
  }
  componentDidMount() {
    this.roll();
  }
  
  handleChange = (event) =>{
    let val = event.target.value;
    let options = playerCounts.filter(function(x){ return x.count === val})[0]
    this.playerCountChanged(options);
  }

  playerCountChanged = (options) => {
    this.setState({
      options: options,
    });
    this.roll();
  };

  roll = () => {
    let options = this.state.options;
    let syn = new Array(options.pathsCount);
    for (let i = 0; i < options.pathsCount; i++) {
      syn[i] = [];
    }
    let marblesList = this.shuffle(options.colorConfig);
    marblesList.forEach((element) => {
      let path;
      do {
        path = Math.floor(Math.random() * options.pathsCount + 1);
      } while (syn[path - 1].length >= 5);
      syn[path - 1].push(element);
    });
    this.setState({
      synagogue: syn,
    });
  };

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
      <div>
        <div className="synagogue">
          {this.state.synagogue.map((column) => {
            return (
              <div className="track">
                {column.map((marble) => {
                  return <Marble color={marble}></Marble>;
                })}
              </div>
            );
          })}
        </div>
        <Button variant="dark" onClick={this.roll}>
          Roll
        </Button>
        <Form.Select onChange={this.handleChange}>
          {
            playerCounts.map((config)=>{
              return (<option>{config.count}</option>)
            })
          }
        </Form.Select>
      </div>
    );
  }
}
