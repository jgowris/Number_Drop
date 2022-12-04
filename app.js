console.log("loaded");

//============== CLASS DEFINITION ============================

class Gameboard {
  constructor(numTile) {
    this.board = [
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
    ];
    this.numberRoll = [2, 4, 8, 16, 32, 64, 128];
    this.numTile = numTile;
    this.isGameRunning = false;
    this.startCol = 3;
  }

  randomNum() {
    console.log(
      "Inside the randomNum fn. The Number roll is " + this.numberRoll
    );
    for (let i = 0; i < 5; i++) {
      const getRandomNumberRoll = Math.floor(
        Math.random() * this.numberRoll.length
      );
      const numTile = this.numberRoll[getRandomNumberRoll];
      console.log("NumTile is " + numTile);
      return numTile;
    }
  }

  setInterval() {
    console.log("Inside the Set Interval function");
    this.randomNum(), 1000;
  }

  startGame() {
    console.log("Inside hte startGame function");
    this.isGameRunning = true;
    console.log("Value of game running is " + this.isGameRunning);
    this.setInterval();
  }
}

const samp = new Gameboard();
samp.startGame();
console.log("Here I am");

/* ========= PSUEDO CODE ===========

High-level steps to achieve before writing the pseudo code:

1. Identify the numbers in scope for the game.
2. Identify the numbers that will be in the loop for user selection.
3. Generate a random number for drop.
3. Complete the concept for one number tile getting to the base. (require moving animation, require onclick catch)
4. Complete the concept for a tile with a different number settling on top of tile with another number.
5. Complete concept for two tiles of the same number (horizontal drop) getting added to a single tile.
6. Extend 5 to add two tiles having same number, but vertically aligned.
7. Adjust the alignment for each calculation (if tile drops right, end state will be updated to right and vice versa).
8. Update the Points earned for every merge.
9. continue random number generation and on click of a column, send it down to column of click.
10. Reset - erase points, reload the game.




*/

// Initialize the class for a number with the below details

// class NumTileCol {
//   constructor(numTile, srcColumn, tgtColumn) {
//     this.numTile = numTile;
//     this.srcNColumn = srcColumn;
//     this.tgtColumn = tgtColumn;
//   }

//   genRdmNbr() {
//     // Function to generate the random number
//     const numberRoll = [2, 4, 8, 16, 32, 64, 128];
//     console.log("number roll is " + numberRoll);
//     const getRandomNumberRoll = Math.floor(Math.random() * numberRoll.length);
//     this.numTile = numberRoll[getRandomNumberRoll];
//     // const rdmNumber = numberRoll[getRandomNumberRoll];
//     console.log("rdmnumber is " + this.numTile);
//   }

//   moveRdmNbr() {
//     // Function to move the number down the column until it reaches base.
//     console.log("Function to move random number");
//   }

//   moveRdmNbrOnClick() {
//     // Move the number to the column of click.
//     console.log("Function to move random number on click");
//   }

//   addToArray() {
//     // Add the moved number to the array.
//     console.log("Function to add random number to array");
//   }

//   addVertical() {
//     // Function to add numbers that are same vertically.
//     console.log("Function to add numbers vertically alligned");
//   }

//   addHorizontal() {
//     // Function to add numbers that are same horizontally
//     console.log("Function to add numbers horizontally alligned");
//   }
// }

//============== DECLARATIONS ============================

const getModCont = document.querySelector(".modal-cont");
const getModalContent = document.querySelector(".modalContent");
const getModalBtn = document.querySelector(".modCont");
const getPlayerName = document.querySelector("#fname");
const showPlayerName = document.querySelector(".player");
const getAboutGameBtn = document.querySelector(".aboutGame");
const getAboutGameModal = document.querySelector(".aboutTheGame");
const getAboutGameModalContent = document.querySelector(".aboutTheGameContent");
const getAboutGameModalCloseBtn = document.querySelector(
  ".closeModalAboutGame"
);
const getGameRulesBtn = document.querySelector(".gameRules");
const getGameRulesModal = document.querySelector(".rulesOfGame");
const getGameRulesModalContent = document.querySelector(".rulesOfGameContent");
const getGameRulesModalCloseBtn = document.querySelector(
  ".closeModalGameRules"
);
const startGame = document.querySelector(".loadGame");
const getColOne = document.querySelector(".colOne");
const getColTwo = document.querySelector(".colTwo");
const getColThree = document.querySelector(".colThree");
const getColFour = document.querySelector(".colFour");
const getColFive = document.querySelector(".colFive");
const getColSix = document.querySelector(".colSix");

//============== FUNCTION CALLS ============================

function dispAboutGameModal() {
  console.log("Inside the About the game modal call");
  getAboutGameModal.style.display = "block";
  getAboutGameModalContent.style.display = "block";
}

function closeModalForGameRules() {
  console.log("Inside the Game Rules close modal function");
  getGameRulesModal.style.display = "none";
  getGameRulesModalContent.style.display = "none";
}

function dispGameRulesModal() {
  console.log("Inside the game rules modal function");
  getGameRulesModal.style.display = "block";
  getGameRulesModalContent.style.display = "block";
}

function closeModalForAboutGame() {
  console.log("Inside the About Game close modal function");
  getAboutGameModal.style.display = "none";
  getAboutGameModalContent.style.display = "none";
}

function closeLoadModal() {
  console.log("Inside the load game function");
  getModCont.style.display = "none";
  getModalContent.style.display = "none";
  showPlayerName.textContent = "PLAYER: " + getPlayerName.value;
  console.log("Initial modal got closed");
}

function loadGame() {
  console.log("Player name is available now, show the game landing page");
  nxtNumberTile();
  console.log("Game landing page is on");
}

// const colmnOne = [];
// const colmnTwo = [];
// const colmnThree = [];
// const colmnFour = [];
// const colmnFive = [];
// const colmnSix = [];

// const getRandomNumberRoll = Math.floor(Math.random() * numberRoll.length);
// const rdmNumber = numberRoll[getRandomNumberRoll];
// console.log("rdmnumber is " + rdmNumber);

function nxtNumberTile() {
  const getNxtTile = document.querySelector(".nextTile");
  getNxtTile.textContent = "COMING UP..." + rdmNumber;
  // colmnOne.push(+rdmNumber);
  // console.log(colmnOne);
}

//============== EVENT LISTENERS ============================

getModalBtn.addEventListener("click", closeLoadModal);
startGame.addEventListener("click", startGame);
getAboutGameBtn.addEventListener("click", dispAboutGameModal);
getAboutGameModalCloseBtn.addEventListener("click", closeModalForAboutGame);

getGameRulesBtn.addEventListener("click", dispGameRulesModal);
getGameRulesModalCloseBtn.addEventListener("click", closeModalForGameRules);
