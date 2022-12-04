const { getData } = require("../util");

const data = getData(__dirname);

function getElves(input) {
  return input
    .trim()
    .split("\n\n")
    .map((str) => str.split("\n").map(Number));
}

const result = getElves(data)
  .map((elf) => elf.reduce((a, b) => a + b, 0))
  .sort((a, b) => (a > b ? -1 : 1))
  .slice(0, 3)
  .reduce((a, b) => a + b, 0);
