import React, { Component } from "react";

import data from "./advertising_data.js";

import TextField from "@material-ui/core/TextField";

import "./advertising.css";

class Advertising extends Component {
  constructor() {
    super();
    const ml = require("ml-regression");
    this.state = {
      SLR: ml.SLR,
      TV: [],
      sales: [],
      radio: [],
      regressionModal: null,
      data: data,
      answer: "",
      prediction: null
    };
  }
  componentDidMount() {
    this.dressData();
    this.setState({
      regressionModel: new this.state.SLR(this.state.TV, this.state.sales)
    });
  }

  dressData = () => {
    this.state.data.forEach(item => {
      this.state.TV.push(item.TV);
      this.state.sales.push(item.sales);
    });
  };

  makePrediction = answer => {
    if (answer)
      this.setState({
        answer: answer,
        prediction: this.state.regressionModel
          .predict(parseFloat(answer))
          .toFixed(2)
      });
    if (answer === "") this.setState({ prediction: null });
  };

  render() {
    return (
      <div className="Advertising">
        <h1>Basic Linear Regression</h1>
        <TextField onChange={e => this.makePrediction(e.target.value)} />
        {this.state.prediction && (
          <div>
            Based on a {this.state.answer} TV rating, the sales should be:{" "}
            {this.state.prediction}
          </div>
        )}
      </div>
    );
  }
}

export default Advertising;
