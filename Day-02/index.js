const { getData } = require("../util");

const data = getData(__dirname);

function getPairs(input) {
  return input
    .trim()
    .split("\n")
    .map((str) => str.split(" "));
}

const strategy = {
  // Rock
  A: {
    hand: "X",
    score: 1,
    wins: "Z",
    loses: "Y",
  },
  // Paper
  B: {
    hand: "Y",
    score: 2,
    wins: "X",
    loses: "Z",
  },
  // Scissors
  C: {
    hand: "Z",
    score: 3,
    wins: "Y",
    loses: "X",
  },
};

let total = null;

getPairs(data).map((round) => {
  if (strategy[round[0]].wins === round[1]) {
    total += strategy[round[0]].score + 6;
  }

  if (strategy[round[0]].hand === round[1]) {
    total += strategy[round[0]].score + 3;
  }

  if (strategy[round[0]].loses === round[1]) {
    total += strategy[round[0]].score;
  }
});

console.log(total);
