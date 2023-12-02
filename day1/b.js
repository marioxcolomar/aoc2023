const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

const elfCalibration = data.split("\n");

const regex = /\d/;

let sum = 0;

const spelledDigits = ['one','two','three','four','five','six','seven','eight','nine']

for (const value of elfCalibration) {
  const digits = []

  for (const val of value) {
    if (!Number.isNaN(Number.parseInt(val))) {
      digits.push(val)
    }

    for (const spelled of spelledDigits) {
      const index = value.indexOf(val)
      const word = value.slice(index)
      if (word.startsWith(spelled)) {
        const spelledIndex = spelledDigits.findIndex(d => d === spelled)
        digits.push(spelledIndex + 1)
      }
    }
  }

  const calibration = +`${digits[0]}${digits[digits.length-1]}`;
  console.log(calibration);
  sum += calibration;
}

// result
console.log("result", sum);
