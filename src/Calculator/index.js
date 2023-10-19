import React, { Component } from "react";
import "./index.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
    };
  }

  onClick = (value) => {
    this.setState((prevState) => ({
      display: prevState.display === "0" ? value : prevState.display + value,
    }));
  };

  onReset = () => {
    this.setState({
      display: "0",
    });
  };

  onCalculate = () => {
    try {
      this.setState((prevState) => ({
        display: eval(prevState.display).toString(),
      }));
    } catch (error) {
      this.setState({
        display: "Error",
      });
    }
  };

  render() {
    return (
      <div className="bg-container">
        <h1>Simple Calculator</h1>
        <div className="calculator">
          <div className="display-container">
            <div className="display">{this.state.display} </div>
            <button className="reset-button" onClick={() => this.onReset()}>
              C
            </button>
          </div>

          <div className="buttons">
            <button onClick={() => this.onClick("1")}>1</button>
            <button onClick={() => this.onClick("2")}>2</button>
            <button onClick={() => this.onClick("3")}>3</button>
            <button className="opbtn" onClick={() => this.onClick("+")}>
              +
            </button>
            <button onClick={() => this.onClick("4")}>4</button>
            <button onClick={() => this.onClick("5")}>5</button>
            <button onClick={() => this.onClick("6")}>6</button>
            <button className="opbtn" onClick={() => this.onClick("-")}>
              -
            </button>
            <button onClick={() => this.onClick("7")}>7</button>
            <button onClick={() => this.onClick("8")}>8</button>
            <button onClick={() => this.onClick("9")}>9</button>
            <button className="opbtn" onClick={() => this.onClick("*")}>
              *
            </button>
            <button onClick={() => this.onClick(".")}>.</button>
            <button onClick={() => this.onClick("0")}>0</button>
            <button className="result-btn" onClick={() => this.onCalculate()}>
              =
            </button>
            <button className="opbtn" onClick={() => this.onClick("/")}>
              /
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
