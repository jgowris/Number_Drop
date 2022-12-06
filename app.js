console.log("loaded");

//============== CLASS DEFINITION ============================

class Gameboard {
  constructor(numTile) {
    this.numTile;
    this.board = [
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
    ];
    // this.numberRoll = [2, 4, 8, 16, 32, 64, 128];
    this.isGameRunning = false;
    this.startCol = 3;
  }

  randomNum() {
    if ((this.isGameRunning = true)) {
      console.log("Inside the randomNum function");
      const numberRoll = [2, 4, 8, 16, 32, 64, 128];
      const getNxtTile = document.querySelector(".nextTile");
      const getRandomNumberRoll = Math.floor(Math.random() * numberRoll.length);
      // const numTile = numberRoll[getRandomNumberRoll];
      this.numTile = numberRoll[getRandomNumberRoll];
      console.log("NumTile is " + this.numTile);
      getNxtTile.textContent = "COMING UP..." + this.numTile;
    }
  }

  startGame() {
    const startGame = document.querySelector(".loadGame");
    // startGame.addEventListener("click", () => {
    this.isGameRunning = true;
    this.randomNum();
  }

  // getNumTile() {
  //   switch (newGame.numTile) {
  //     case 2:
  //       const getNumTile = document.querySelector(".numberTwo");
  //       console.log("this is test for gettwotile");
  //       break;
  //     case 4:
  //       const getNumTile = document.querySelector(".numberFour");
  //       break;
  //     case 8:
  //       const getNumTile = document.querySelector(".numberEight");
  //       break;
  //     case 16:
  //       const getSxTeenTile = document.querySelector(".numbersSixteen");
  //       break;
  //     case 32:
  //       const getThryTwoTile = document.querySelector(".numbersThirtyTwo");
  //       break;
  //     case 64:
  //       const getSixForTile = document.querySelector(".numbersSixtyFour");
  //       break;
  //     case 128:
  //       const getOneToEghtTile = document.querySelector(".numbersOneTwoEight");
  //       break;
  //   }
  // }

  updateColOne() {
    console.log(this.board);
    console.log(this.numTile);
    const getArrRef = this.board[0].indexOf(undefined);
    console.log("Idx ref for undef in Col 1 is " + getArrRef);
    const getColOne = document.querySelector(".colOne");
    console.log(
      "Old value in the index location in Col 1 is: " + this.board[0][getArrRef]
    );
    this.board[getArrRef] = this.numTile;
    console.log(
      "New value for the same index location in col 1 is : " +
        this.board[getArrRef]
    );
    console.log("current random number is " + newGame.numTile);
    this.randomNum();
  }

  updateColTwo() {
    console.log("current random number is " + newGame.numTile);
    const getArrRef = this.board[1].indexOf(undefined);
    console.log("Idx ref for undef is col 2 is " + getArrRef);
    const getColOne = document.querySelector(".colTwo");
    console.log(
      "Old value in the index location in col 2 is : " +
        this.board[1][getArrRef]
    );
    this.board[getArrRef] = this.numTile;
    console.log(
      "New value for the same index location in col 2 is : " +
        this.board[getArrRef]
    );
    console.log("current random number is " + this.numTile);
    this.randomNum();
  }

  updateColThree() {
    console.log("current random number is " + newGame.numTile);
    const getArrRef = this.board[2].indexOf(undefined);
    console.log("Idx ref for undef is col 3 is " + getArrRef);
    const getColOne = document.querySelector(".colThree");
    console.log(
      "Old value in the index location in col 2 is : " +
        this.board[2][getArrRef]
    );
    this.board[getArrRef] = this.numTile;
    console.log(
      "New value for the same index location in col 3 is : " +
        this.board[getArrRef]
    );
    console.log("current random number is " + this.numTile);
    this.randomNum();
  }

  updateColThree() {
    console.log("current random number is " + newGame.numTile);
    const getArrRef = this.board[3].indexOf(undefined);
    console.log("Idx ref for undef is col 4 is " + getArrRef);
    const getColOne = document.querySelector(".colThree");
    console.log(
      "Old value in the index location in col 4 is : " +
        this.board[3][getArrRef]
    );
    this.board[getArrRef] = this.numTile;
    console.log(
      "New value for the same index location in col 4 is : " +
        this.board[getArrRef]
    );
    console.log("current random number is " + this.numTile);
    this.randomNum();
  }

  updateColFive() {
    console.log("current random number is " + newGame.numTile);
    const getArrRef = this.board[4].indexOf(undefined);
    console.log("Idx ref for undef is col 5 is " + getArrRef);
    const getColOne = document.querySelector(".colFive");
    console.log(
      "Old value in the index location in col 5 is : " +
        this.board[4][getArrRef]
    );
    this.board[getArrRef] = this.numTile;
    console.log(
      "New value for the same index location in col 5 is : " +
        this.board[getArrRef]
    );
    console.log("current random number is " + this.numTile);
    this.randomNum();
  }

  updateColSix() {
    console.log("current random number is " + newGame.numTile);
    const getArrRef = this.board[5].indexOf(undefined);
    console.log("Idx ref for undef is col 6 is " + getArrRef);
    const getColOne = document.querySelector(".colSix");
    console.log(
      "Old value in the index location in col 6 is : " +
        this.board[5][getArrRef]
    );
    this.board[getArrRef] = this.numTile;
    console.log(
      "New value for the same index location in col 6 is : " +
        this.board[getArrRef]
    );
    console.log("current random number is " + this.numTile);
    this.randomNum();
  }

  // getColTwo.addEventListener("click", function() {
  //   console.log("clicked on col2");
  // });

  // // if (colNum === 2) {
  // //   const getArrRef = this.board[1];
  // //   getUndef = getArrRef.lastIndexOf(undefined);
  // //   console.log("col is 2");
  // // }

  // getColThree.addEventListener("click", function () {
  //   console.log("clicked on col3");
  // });

  // // if (colNum === 3) {
  // //   const getArrRef = this.board[2];
  // //   getUndef = getArrRef.lastIndexOf(undefined);
  // //   console.log("col is 3");
  // // }

  // getColFour.addEventListener("click", function () {
  //   console.log("clicked on col4");
  // });
  // // if (colNum === 4) {
  // //   const getArrRef = this.board[3];
  // //   getUndef = getArrRef.lastIndexOf(undefined);
  // //   console.log("col is 4");
  // // }

  // getColFive.addEventListener("click", function () {
  //   console.log("clicked on col5");
  // });

  // // if (colNum === 5) {
  // //   const getArrRef = this.board[4];
  // //   getUndef = getArrRef.lastIndexOf(undefined);
  // //   console.log("col is 5");
  // // }

  // getColSix.addEventListener("click", function () {
  //   console.log("clicked on col6");
  // });

  // if (colNum === 6) {
  //   const getArrRef = this.board[5];
  //   getUndef = getArrRef.lastIndexOf(undefined);
  //   console.log("col is 6");
  // }
}
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


Once the modal is clicked, the game page is loaded.
System should wait for the user to select 'Play' to start the game. ('Reset' can continue to be enabled).
Once in 'Play', run the random number function to get the next two ramdom numbers.
The first one should drop in the game, next one to be shown on the top.
Stop the random number function until the click OR number has settled down in a column.

Animate to drop the number down the column.

Event listener for click Or no click.
  if click, then drop the number in the selected column
  if no click, then continue with the current column.
  Check collision logic - horizontal, vertical.

declare gamerunning is false.
  Once play is on (Play OR reset) then initializ the gamerunning flag = true
  Run the random number generation function.
  Either click or for a position, drop the number.
  Run the collision logic to merge.
*/

// Initialize the class for a number with the below details

// class NumTileCol {
//   constructor(numTile, srcColumn, tgtColumn) {
//     this.numTile = numTile;
//     this.srcNColumn = srcColumn;
//     this.tgtColumn = tgtColumn;
//   }

// genRdmNbr() {
//   // Function to generate the random number
//   const numberRoll = [2, 4, 8, 16, 32, 64, 128];
//   console.log("number roll is " + numberRoll);
//   const getRandomNumberRoll = Math.floor(Math.random() * numberRoll.length);
//   this.numTile = numberRoll[getRandomNumberRoll];
//   // const rdmNumber = numberRoll[getRandomNumberRoll];
//   console.log("rdmnumber is " + this.numTile);
// }

// moveRdmNbr() {}
//   // Function to move the number down the column until it reaches base.
//   console.log("Function to move random number");
// }

// moveRdmNbrOnClick() {
//   // Move the number to the column of click.
//   console.log("Function to move random number on click");
// }

// addToArray() {
//   // Add the moved number to the array.
//   console.log("Function to add random number to array");
// }

// addVertical() {
//   // Function to add numbers that are same vertically.
//   console.log("Function to add numbers vertically alligned");
// }

// addHorizontal() {
//   // Function to add numbers that are same horizontally
//   console.log("Function to add numbers horizontally alligned");
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
const getGameSpace = document.querySelector(".gameSpace");
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
  console.log("Inside the close modal function");
  getModCont.style.display = "none";
  getModalContent.style.display = "none";
  showPlayerName.textContent = "PLAYER: " + getPlayerName.value;
  console.log("Initial modal got closed");
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

// function nxtNumberTile() {
//   const getNxtTile = document.querySelector(".nextTile");
//   getNxtTile.textContent = "COMING UP..." + rdmNumber;
//   // colmnOne.push(+rdmNumber);
//   // console.log(colmnOne);
// }

//============== EVENT LISTENERS ============================
const newGame = new Gameboard();
console.log(newGame);

startGame.addEventListener("click", () => {
  newGame.startGame();
});

getColOne.addEventListener("click", () => {
  newGame.updateColOne();
});

getColTwo.addEventListener("click", () => {
  newGame.updateColTwo();
});

getColThree.addEventListener("click", () => {
  newGame.updateColThree();
});

getColFour.addEventListener("click", () => {
  newGame.updateColFour();
});

getColFive.addEventListener("click", () => {
  newGame.updateColFive();
});

getColSix.addEventListener("click", () => {
  newGame.updateColSix();
});

// getGameSpace.addEventListener("click",updateCol);
getModalBtn.addEventListener("click", closeLoadModal);
getAboutGameBtn.addEventListener("click", dispAboutGameModal);
getAboutGameModalCloseBtn.addEventListener("click", closeModalForAboutGame);

getGameRulesBtn.addEventListener("click", dispGameRulesModal);
getGameRulesModalCloseBtn.addEventListener("click", closeModalForGameRules);
