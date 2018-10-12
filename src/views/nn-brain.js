import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import brain from "brain.js";

import data from "./advertising_data.js";
const net = new brain.NeuralNetwork();

class Brain extends Component {
  constructor() {
    super();
    this.state = {
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
    const res = this.dressData();
    net.train(res);
  }

  dressData = () => {
    let res = [];
    this.state.data.forEach(item => {
      res.push({
        input: {
          TV: item.TV / 1000,
          radio: item.radio / 1000,
          newspaper: item.newspaper / 1000
        },
        output: { sales: item.sales > 15 ? 1 : 0 }
      });
    });

    return res;
  };

  makePrediction = x => {
    if (this.state.TV && this.state.radio && this.state.newspaper) {
      const output = net.run({
        TV: parseInt(this.state.TV) / 1000,
        radio: parseInt(this.state.radio) / 1000,
        newspaper: parseInt(this.state.newspaper) / 1000
      });

      this.setState({
        prediction: output.sales
      });
    }
  };

  render() {
    return (
      <div className="brain">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <h1>Neural Net with Brain.js</h1>
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField
              label="TV score"
              onChange={e => this.setState({ TV: e.target.value })}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField
              label="Radio score"
              onChange={e => this.setState({ radio: e.target.value })}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField
              label="Newspaper score"
              onChange={e => this.setState({ newspaper: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                marginTop: "1em",
                textAlign: "center",
                backgroundColor: "#6200EE",
                color: "white"
              }}
              onClick={() => this.makePrediction()}
            >
              Submit
            </Button>
          </Grid>
          {this.state.prediction && (
            <div style={{ paddingTop: "1em" }}>
              Based on your inputs, the sales should've been a{" "}
              {this.state.prediction === 1 ? (
                <h3
                  style={{
                    backgroundColor: "#03DAC5",
                    padding: ".5em",
                    color: "white"
                  }}
                >
                  Success
                </h3>
              ) : (
                <h3
                  style={{
                    backgroundColor: "#B00020",
                    padding: ".5em",
                    color: "white"
                  }}
                >
                  Failure
                </h3>
              )}
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

export default Brain;
