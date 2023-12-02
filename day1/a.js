const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

const elfCalibration = data.split("\n");

const regex = /\d/g;

let sum = 0;

for (const value of elfCalibration) {
  // console.log("value", value);
  const firstDigit = value.match(regex);
  const lastDigit = value.split("").reverse().join().match(regex);
  const calibration = +`${firstDigit}${lastDigit}`;
  // console.log(calibration);
  sum += calibration;
}

// result
console.log("result", sum);
