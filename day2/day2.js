// X = LOST --> 0 points
// Y = TIE-BREAKER --> 3 points
// Z = WON --> 6 points

// rock = A and X --> 1point
// paper = B and Y --> 2points
// scissors = C and Z --> 3points

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString("utf-8");
const inputArray = input.replace(/ /g, "").split("");

const player1 = [];
const player2 = [];

inputArray.map((element) => {
  if (element === "B" || element === "A" || element === "C") {
    player1.push(element);
  } else if (element === "X" || element === "Z" || element === "Y") {
    player2.push(element);
  }
});

console.log("player1", player1);
console.log("player2", player2);

// //--------------------------------------- PART 2 ---------------------------------------//

const newPlayer2 = [];
const getPart2 = (player1, player2) => {
  for (i = 0; i < player2.length; i++) {
    if (player1[i] === "B" && player2[i] === "Z") {
      newPlayer2.push("Z");
    } else if (player1[i] === "C" && player2[i] === "Z") {
      newPlayer2.push("X");
    } else if (player1[i] === "A" && player2[i] === "Z") {
      newPlayer2.push("Y");
    } else if (player1[i] === "B" && player2[i] === "Y") {
      newPlayer2.push("Y");
    } else if (player1[i] === "C" && player2[i] === "Y") {
      newPlayer2.push("Z");
    } else if (player1[i] === "A" && player2[i] === "Y") {
      newPlayer2.push("X");
    } else if (player1[i] === "B" && player2[i] === "X") {
      newPlayer2.push("X");
    } else if (player1[i] === "C" && player2[i] === "X") {
      newPlayer2.push("Y");
    } else if (player1[i] === "A" && player2[i] === "X") {
      newPlayer2.push("Z");
    }
  }
};

getPart2(player1, player2);
console.log("newPlayer2", newPlayer2);

// //--------------------------------------- WINS ---------------------------------------//

const winsArray = [];

const getWin = (player1, player2) => {
  for (i = 0; i < player2.length; i++) {
    if (
      (player1[i] === "B" && player2[i] === "Z") ||
      (player1[i] === "C" && player2[i] === "X") ||
      (player1[i] === "A" && player2[i] === "Y")
    ) {
      winsArray.push(player2[i]);
    }
  }
  return winsArray;
};

getWin(player1, newPlayer2);
console.log("winArray", winsArray.length);

let wonGames = {};
winsArray.forEach((party) => {
  wonGames[party] = (wonGames[party] || 0) + 1;
});
console.log("wonGames", wonGames); // wonGames { Z: 173, X: 154, Y: 88 } 415

const pointsWonX = wonGames.X * 1;
const pointsWonY = wonGames.Y * 2;
const pointsWonZ = wonGames.Z * 3;
const pointsWon = winsArray.length * 6;
const pointsOfWonGames = pointsWonX + pointsWonY + pointsWonZ + pointsWon;
console.log("pointsOfWonGames", pointsOfWonGames);

//--------------------------------------- LOST ---------------------------------------//

const lostArray = [];

const getLose = (player1, player2) => {
  for (i = 0; i < player2.length; i++) {
    if (
      (player1[i] === "C" && player2[i] === "Y") ||
      (player1[i] === "A" && player2[i] === "Z") ||
      (player1[i] === "B" && player2[i] === "X")
    ) {
      lostArray.push(player2[i]);
    }
  }
  return lostArray;
};

getLose(player1, newPlayer2);
console.log("lostArray", lostArray.length);

let lostGames = {};
lostArray.forEach((party) => {
  lostGames[party] = (lostGames[party] || 0) + 1;
});
console.log("lostGames", lostGames); // lostGames { Z: 789, X: 108, Y: 249 } 1146

const pointsLostX = lostGames.X * 1;
const pointsLostY = lostGames.Y * 2;
const pointsLostZ = lostGames.Z * 3;
const pointsLost = lostArray.length * 0;
const pointsOfLostGames = pointsLostX + pointsLostY + pointsLostZ + pointsLost;
console.log("pointsOfLostGames", pointsOfLostGames);

//--------------------------------------- TIE-BREAK ---------------------------------------//

const tieBreakersArray = [];

const getTieBreaker = (player1, player2) => {
  for (i = 0; i < player2.length; i++) {
    if (
      (player1[i] === "A" && player2[i] === "X") ||
      (player1[i] === "B" && player2[i] === "Y") ||
      (player1[i] === "C" && player2[i] === "Z")
    ) {
      tieBreakersArray.push(player2[i]);
    }
  }
  return tieBreakersArray;
};

getTieBreaker(player1, newPlayer2);
console.log("tieBreakersArray", tieBreakersArray.length);

let tieGames = {};
tieBreakersArray.forEach((party) => {
  tieGames[party] = (tieGames[party] || 0) + 1;
});
console.log("tieGames", tieGames); // tieGames { Z: 252, X: 635, Y: 52 } 939

const pointsTieBreakerX = tieGames.X * 1;
const pointsTieBreakerY = tieGames.Y * 2;
const pointsTieBreakerZ = tieGames.Z * 3;
const pointsTieBreaker = tieBreakersArray.length * 3;
const pointsOfTieBreakerGames =
  pointsTieBreakerX + pointsTieBreakerY + pointsTieBreakerZ + pointsTieBreaker;
console.log("pointsOfTieBreakerGames", pointsOfTieBreakerGames);

//--------------------------------------- TOTAL SCORE ---------------------------------------//

const totalScore =
  pointsOfWonGames + pointsOfLostGames + pointsOfTieBreakerGames;

console.log("totalScore", totalScore); // 10624
