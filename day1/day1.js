const fs = require("fs");

const text = fs.readFileSync("input.txt").toString("utf-8");
const textArray = text.split("\n");

for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] === "") {
    textArray[i] = "break";
  }
}

let newArray = [];

const numberArray = () => {
  textArray.map((el) => {
    if (el === "break") {
      newArray.push(el);
    } else if (el !== "break") {
      const number = parseInt(el);
      newArray.push(number);
    }
  });
  return newArray;
};

const sumArray = numberArray();

let sum = 0;
const finalArray = [];

for (let i = 0; i < sumArray.length; i++) {
  if (typeof sumArray[i] === "number") {
    sum += sumArray[i];
  } else {
    finalArray.push(sum);
    sum = 0;
    continue;
  }
}

console.log("biggest number->", Math.max(...finalArray));

finalArray.sort(function (a, b) {
  return a - b;
});

const sumCalories = finalArray.reverse().slice(0, 3);

let totalCalories = 0;

sumCalories.map((number) => {
  return (totalCalories += number);
});

console.log("totalCalories", totalCalories);
