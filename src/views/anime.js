import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import brain from "brain.js";
// import Jimp from "jimp";
import rgbs from "../scripts/rgbs";

// import anime_data from "./anime-data.js";
// const net = new brain.NeuralNetwork();

class Anime extends Component {
  constructor() {
    super();
    this.state = {
      answer: "",
      prediction: null
    };
  }
  componentDidMount() {
    // const res = this.encode();
    // net.train(res);
    // console.log(rgbs.length);
  }

  // encode = () => {
  //   Jimp.read(
  //     "https://myanimelist.cdn-dena.com/images/anime/3/87719.jpg",
  //     function(err, image) {
  //       for (let x = 0; x < 10; x++) {
  //         for (let y = 0; y < 10; y++) {
  //           console.log(Jimp.intToRGBA(image.getPixelColor(x, y))); // returns the colour of that pixel e.g. 0xFFFFFFFF
  //         }
  //       }
  //     }
  //   );

  //   res.push({
  //     input: {
  //       image: item.newspaper / 1000
  //     },
  //     output: { sales: item.sales > 15 ? 1 : 0 }
  //   });
  // }
  // data.forEach(item => {
  //   res.push({
  //     input: {
  //       TV: item.TV / 1000,
  //       radio: item.radio / 1000,
  //       newspaper: item.newspaper / 1000
  //     },
  //     output: { sales: item.sales > 15 ? 1 : 0 }
  //   });
  // });

  // return res;
  // };

  // makePrediction = x => {
  //   if (this.state.TV && this.state.radio && this.state.newspaper) {
  //     const output = net.run({
  //       TV: parseInt(this.state.TV) / 1000,
  //       radio: parseInt(this.state.radio) / 1000,
  //       newspaper: parseInt(this.state.newspaper) / 1000
  //     });

  //     this.setState({
  //       prediction: output.sales
  //     });
  //   }
  // };

  render() {
    return (
      <div className="brain">
        hi
        <Grid container direction="row" justify="center" alignItems="center" />
      </div>
    );
  }
}

export default Anime;
