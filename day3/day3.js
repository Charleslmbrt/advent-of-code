const fs = require("fs");

const input = fs.readFileSync("input.txt").toString("utf-8");
const inputArray = input.split("\n");

console.log("inputArray", inputArray);

const itemsTypeArray = [];

inputArray.map((element) => {
  const half = Math.ceil(element.length / 2);
  const first = element.slice(0, half);
  const second = element.slice(half);

  for (item of first) {
    for (item2 of second) {
      if (item === item2) {
        return itemsTypeArray.push(item);
      }
    }
  }
});

console.log("itemsTypeArray", itemsTypeArray);

const alphabet = [];
const lowerString = "abcdefghijklmnopqrstuvwxyz";
alphabet.push(
  lowerString.split("") + "," + lowerString.toUpperCase().split("")
);

const alphabetArray = alphabet.toString().split(",");
console.log("alphabetArray", alphabetArray);

const prioritiesArray = [];

for (letter of itemsTypeArray) {
  for (letter2 of alphabetArray) {
    if (letter === letter2) {
      prioritiesArray.push(alphabetArray.indexOf(letter2) + 1);
    }
  }
}

console.log("prioritiesArray", prioritiesArray);

let sum = 0;
prioritiesArray.forEach((number) => {
  sum += number;
  return sum;
});

console.log("sum", sum);
