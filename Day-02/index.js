const { getData } = require("../util");

const data = getData(__dirname);

function getPairs(input) {
  return input
    .trim()
    .split("\n")
    .map((str) => str.split(" "));
}

const moves = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};

const win = {
  A: moves["B"],
  B: moves["C"],
  C: moves["A"],
};

const lose = {
  A: moves["C"],
  B: moves["A"],
  C: moves["B"],
};

const draw = {
  A: moves["A"],
  B: moves["B"],
  C: moves["C"],
};

const shapePoint = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const outcomes = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

function getOutcome(strategyMove, move) {
  if (strategyMove === "win") return win[move];
  if (strategyMove === "lose") return lose[move];
  if (strategyMove === "draw") return draw[move];
}

function score(opponentMove, ourMove) {
  if (outcomes[ourMove] === "win") {
    return shapePoint[getOutcome("win", opponentMove)] + 6;
  }

  if (outcomes[ourMove] === "draw") {
    return shapePoint[getOutcome("draw", opponentMove)] + 3;
  }

  if (outcomes[ourMove] === "lose") {
    return shapePoint[getOutcome("lose", opponentMove)];
  }
}

const part2 = getPairs(data)
  .map((round) => {
    return score(round[0], round[1]);
  })
  .reduce((a, b) => a + b, 0);

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

const part1 = getPairs(data).map((round) => {
  return score(round[0], round[1]);
});

result.reduce((a, b) => a + b, 0);
