const Jimp = require("jimp");
const fs = require("fs");
let poo = [];
getRGBs = url => {
  const y = Jimp.read(url, (err, image) => {
    let temp = [];
    for (let x = 0; x < 200; x++) {
      for (let y = 0; y < 200; y++) {
        temp.push(Jimp.intToRGBA(image.getPixelColor(x, y))); // returns the colour of that pixel e.g. 0xFFFFFFFF
      }
    }
    fs.readFile(__dirname + "/rgbs.json", "utf8", function readFileCallback(
      err,
      data
    ) {
      if (err) {
        console.log(err + "@1");
      } else {
        // let myObj = JSON.parse(data); //now it an object
        // myObj.data.push(temp); //add some data
        // console.log(myObj);
        // const json = JSON.stringify(myObj); //convert it back to json

        fs.appendFile(__dirname + "/rgbs.json", JSON.stringify(temp), error => {
          console.log("Error! @2");
        });
      }
    });
  });
};

// const { data } = require("./sub-anime-data.js");
// const anime = data();
// const images = anime.map(item => item.image_url);
// const rgbs = images.map(item => getRGBs(item));
// fs.readFile(__dirname + "/rgbs.json", "utf8", function readFileCallback(
//   err,
//   data
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     let myObj = JSON.parse(data); //now it an object
//     console.log(myObj.data.length);
//     // myObj.data.push(temp); //add some data
//     // console.log(myObj);
//     // const json = JSON.stringify(myObj); //convert it back to json
//   }
// });

const { data } = require("./rgbs");
const trainingData = data();
console.log(trainingData.length);
