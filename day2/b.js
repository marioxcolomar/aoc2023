const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

const puzzleInput = data.split("\n");

let score = 0

for (const puzzle of puzzleInput) {
  id = +puzzle.slice(4,puzzle.indexOf(':'))
  const sets = puzzle.slice(puzzle.indexOf(':')+1).split(';')
  let values = {red:0,green:0,blue:0}
  for (const set of sets) {
    const picks = set.split(',')
    for (const pick of picks) {
      const digit = pick.match(/\d+/g)[0]
      const color = pick.slice(pick.indexOf(digit)+digit.length).trim()
      const digitValue = Number.parseInt(digit,10)
      values[color] = Math.max(values[color],digitValue)
    }
  }
  let result = 1
  for (const v of Object.values(values)) {
    result *= v
  }
  score += result
}

console.log('score',score)