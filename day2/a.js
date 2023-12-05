const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

const puzzleInput = data.split("\n");

// 12 red cubes, 13 green cubes, and 14 blue cubes
const possible = {red:12,green:13,blue:14}

let score = 0

for (const puzzle of puzzleInput) {
  id = +puzzle.slice(4,puzzle.indexOf(':'))
  const sets = puzzle.slice(puzzle.indexOf(':')+1).split(';')
  let isPossible = true
  for (const set of sets) {
    const picks = set.split(',')
    for (const pick of picks) {
      const digit = pick.match(/\d+/g)[0]
      const color = pick.slice(pick.indexOf(digit)+digit.length).trim()
      const digitValue = Number.parseInt(digit,10)
      if (digitValue > possible[color]) {
        isPossible = false
      }
    }
  }
  if (isPossible) {
    score += id
  }
}

console.log('score',score)