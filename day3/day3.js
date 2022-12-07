const fs = require("fs");
const { off } = require("process");

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

// ------------------------------- STEP 2 --------------------------------------------

const groupsArray = [];

function getGroups(arr, groupSize) {
  for (let i = 0; i < arr.length; i += groupSize) {
    const groupOfElves = arr.slice(i, i + groupSize);
    groupsArray.push(groupOfElves);
  }
  return groupsArray;
}

console.log("getGroups", getGroups(inputArray, 3));

const badgesArray = [];
groupsArray.map((group) => {
  for (item of group[0]) {
    for (item2 of group[1]) {
      for (item3 of group[2]) {
        if (item === item2 && item === item3) {
          return badgesArray.push(item);
        }
      }
    }
  }
});

console.log("badgesArray", badgesArray);

const prioritiesBadgesArray = [];

for (letter of badgesArray) {
  for (letter2 of alphabetArray) {
    if (letter === letter2) {
      prioritiesBadgesArray.push(alphabetArray.indexOf(letter2) + 1);
    }
  }
}

console.log("prioritiesBadgesArray", prioritiesBadgesArray);

let badgesSum = 0;
prioritiesBadgesArray.forEach((number) => {
  badgesSum += number;
  return badgesSum;
});

console.log("badgesSum", badgesSum);
