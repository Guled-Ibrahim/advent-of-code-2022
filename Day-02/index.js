const { getData } = require("../util");

const data = getData(__dirname);

function getPairs(input) {
  return input
    .trim()
    .split("\n")
    .map((str) => str.split(" "));
}

const shape = {
  X: 1,
  Y: 2,
  Z: 3,
};

const moves = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

function score(opponentMove, ourMove) {
  if (
    (moves[opponentMove] === "Rock" && moves[ourMove] === "Paper") ||
    (moves[opponentMove] === "Paper" && moves[ourMove] === "Scissors") ||
    (moves[opponentMove] === "Scissors" && moves[ourMove] === "Rock")
  ) {
    return shape[ourMove] + 6;
  }

  if (moves[opponentMove] === moves[ourMove]) {
    return shape[ourMove] + 3;
  }

  return shape[ourMove];
}

const result = getPairs(data).map((round) => {
  return score(round[0], round[1]);
});

result.reduce((a, b) => a + b, 0);

// https://adventofcode.com/2022/day/2
