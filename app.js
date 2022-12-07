console.log("loaded");

//============== CLASS DEFINITION ============================

class Gameboard {
  constructor(numTile) {
    this.numTile;
    this.board = [
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
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

  // gameOver() {
  //   for (let i = 0; i < this.board.length; i++) {
  //     for (let x = 0; x < this.board[x].length; x++) {
  //       if (this.board[x].length - 1).valueOf() !== undefined) {
  //         prompt("Game Over");
  //       }
  //     }
  //   }
  // }

  updateColOne() {
    console.log(this.board);
    console.log("current random number is " + this.numTile);
    const getArrRef = this.board[0].indexOf(undefined);
    console.log("Column 1 - First Index where undef is " + getArrRef);
    const creaNumTile = document.createElement("div");
    // creaNumTile.classList.add("Tile" + getArrRef);
    getColOne.style.backgroundColor = "#cb997e";
    getColOne.style.height = "500px";
    getColOne.style.width = "65px";
    // getColOne.style.boxShadow = "-5px 1px 0 0.8px #cb997e";
    getColOne.style.display = "flex";
    getColOne.style.flexDirection = "column-reverse";
    getColOne.style.zIndex = "1";
    console.log("Old value in the index location: " + this.board[0][getArrRef]);
    this.board[0][getArrRef] = this.numTile;
    creaNumTile.innerText = this.numTile;
    // creaNumTile.style.display = "flex";
    creaNumTile.style.height = "40px";
    creaNumTile.style.width = "60px";
    creaNumTile.style.color = "rgb(0, 0, 0)";
    creaNumTile.style.display = "flex";
    creaNumTile.style.alignItems = "center";
    creaNumTile.style.justifyContent = "center";
    creaNumTile.style.marginTop = "2px";
    creaNumTile.style.marginBottom = "4px";
    creaNumTile.style.marginLeft = "0px";
    creaNumTile.style.paddingTop = "2px";
    creaNumTile.style.fontSize = "16px";
    creaNumTile.style.fontWeight = "800";
    creaNumTile.style.borderRadius = "10px";
    creaNumTile.style.boxShadow = "3px 3px 5px 0.8px #335c67";
    creaNumTile.style.zIndex = "1";
    if (this.numTile == 2) {
      creaNumTile.style.backgroundColor = "#e9d8a6";
      creaNumTile.innerText = "2";
    } else if (this.numTile == 4) {
      creaNumTile.style.backgroundColor = "#ee9b00";
      creaNumTile.innerText = "4";
    } else if (this.numTile == 8) {
      creaNumTile.style.backgroundColor = "#94d2bd";
      creaNumTile.innerText = "8";
    } else if (this.numTile == 16) {
      creaNumTile.style.backgroundColor = "#ca6702";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "16";
    } else if (this.numTile == 32) {
      creaNumTile.style.backgroundColor = "#0a9396";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "32";
    } else if (this.numTile == 64) {
      creaNumTile.style.backgroundColor = "#bb3e03";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "64";
    } else if ((this.numTile = 128)) {
      creaNumTile.style.backgroundColor = "#005f73";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "128";
    }
    getColOne.append(creaNumTile);

    if (this.board[0][getArrRef] == this.board[0][getArrRef + 1]) {
      this.board[0][getArrRef] =
        this.board[0][getArrRef] + this.board[0][getArrRef + 1];
      creaNumTile.removeChild(creaNumTile.lastElementChild);
    }

    console.log("New value in the index location: " + this.board[0][getArrRef]);
    console.log("Array after update is " + this.board[0]);
    this.randomNum();
  }

  updateColTwo() {
    console.log("current random number is " + this.numTile);
    const getArrRef = this.board[1].indexOf(undefined);
    console.log("Column 2 - First Index where undef is " + getArrRef);
    const creaNumTile = document.createElement("div");
    console.log("Old value in the index location: " + this.board[1][getArrRef]);
    this.board[1][getArrRef] = this.numTile;
    getColTwo.style.backgroundColor = "#ddbea9";
    getColTwo.style.height = "500px";
    getColTwo.style.width = "65px";
    // getColTwo.style.boxShadow = "-5px 1px 0 0.8px #cb997e";
    getColTwo.style.display = "flex";
    getColTwo.style.flexDirection = "column-reverse";
    getColTwo.style.zIndex = "1";
    creaNumTile.innerText = this.numTile;
    creaNumTile.style.display = "flex";
    creaNumTile.style.height = "40px";
    creaNumTile.style.width = "60px";
    creaNumTile.style.color = "rgb(0, 0, 0)";
    creaNumTile.style.textAlign = "center";
    creaNumTile.style.justifyContent = "center";
    creaNumTile.style.alignItems = "center";
    creaNumTile.style.marginTop = "2px";
    creaNumTile.style.marginBottom = "4px";
    creaNumTile.style.marginLeft = "0px";
    creaNumTile.style.paddingTop = "2px";
    creaNumTile.style.fontSize = "16px";
    creaNumTile.style.fontWeight = "800";
    creaNumTile.style.borderRadius = "10px";
    creaNumTile.style.boxShadow = "5px 5px 8px 0.8px #335c67";
    creaNumTile.style.zIndex = "1";
    if (this.numTile == 2) {
      creaNumTile.style.backgroundColor = "#e9d8a6";
      creaNumTile.innerText = "2";
    } else if (this.numTile == 4) {
      creaNumTile.style.backgroundColor = "#ee9b00";
      creaNumTile.innerText = "4";
    } else if (this.numTile == 8) {
      creaNumTile.style.backgroundColor = "#94d2bd";
      creaNumTile.innerText = "8";
    } else if (this.numTile == 16) {
      creaNumTile.style.backgroundColor = "#ca6702";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "16";
    } else if (this.numTile == 32) {
      creaNumTile.style.backgroundColor = "#0a9396";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "32";
    } else if (this.numTile == 64) {
      creaNumTile.style.backgroundColor = "#bb3e03";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "64";
    } else if ((this.numTile = 128)) {
      creaNumTile.style.backgroundColor = "#005f73";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "128";
    }
    getColTwo.appendChild(creaNumTile);
    console.log("New value in the index location: " + this.board[1][getArrRef]);
    console.log("Array after update is " + this.board[1]);
    this.randomNum();
  }

  updateColThree() {
    console.log("current random number is " + this.numTile);
    const getArrRef = this.board[2].indexOf(undefined);
    console.log("Column 3 - First Index where undef is: " + getArrRef);
    // const getColOne = document.querySelector(".colThree");
    const creaNumTile = document.createElement("div");
    console.log("Old value in the index location: " + this.board[2][getArrRef]);
    this.board[2][getArrRef] = this.numTile;
    getColThree.style.backgroundColor = "#ffe8d6";
    getColThree.style.height = "500px";
    getColThree.style.width = "65px";
    // getColTwo.style.boxShadow = "-5px 1px 0 0.8px #cb997e";
    getColThree.style.display = "flex";
    getColThree.style.flexDirection = "column-reverse";
    getColThree.style.zIndex = "1";
    console.log("Old value in the index location: " + this.board[2][getArrRef]);
    this.board[1][getArrRef] = this.numTile;
    creaNumTile.innerText = this.numTile;
    creaNumTile.style.display = "flex";
    creaNumTile.style.height = "40px";
    creaNumTile.style.width = "60px";
    creaNumTile.style.color = "rgb(0, 0, 0)";
    creaNumTile.style.textAlign = "center";
    creaNumTile.style.justifyContent = "center";
    creaNumTile.style.alignItems = "center";
    creaNumTile.style.marginTop = "2px";
    creaNumTile.style.marginBottom = "4px";
    creaNumTile.style.marginLeft = "0px";
    creaNumTile.style.paddingTop = "2px";
    creaNumTile.style.fontSize = "16px";
    creaNumTile.style.fontWeight = "800";
    creaNumTile.style.borderRadius = "10px";
    creaNumTile.style.boxShadow = "5px 5px 8px 0.8px #335c67";
    creaNumTile.style.zIndex = "1";
    if (this.numTile == 2) {
      creaNumTile.style.backgroundColor = "#e9d8a6";
      creaNumTile.innerText = "2";
    } else if (this.numTile == 4) {
      creaNumTile.style.backgroundColor = "#ee9b00";
      creaNumTile.innerText = "4";
    } else if (this.numTile == 8) {
      creaNumTile.style.backgroundColor = "#94d2bd";
      creaNumTile.innerText = "8";
    } else if (this.numTile == 16) {
      creaNumTile.style.backgroundColor = "#ca6702";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "16";
    } else if (this.numTile == 32) {
      creaNumTile.style.backgroundColor = "#0a9396";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "32";
    } else if (this.numTile == 64) {
      creaNumTile.style.backgroundColor = "#bb3e03";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "64";
    } else if ((this.numTile = 128)) {
      creaNumTile.style.backgroundColor = "#005f73";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "128";
    }
    getColThree.appendChild(creaNumTile);
    console.log("New value in the index location: " + this.board[2][getArrRef]);
    console.log("Array after update is " + this.board[2]);

    this.randomNum();
  }

  updateColFour() {
    console.log("current random number is " + this.numTile);
    const getArrRef = this.board[3].indexOf(undefined);
    console.log("Column 4 - First Index where undef is " + getArrRef);
    // const getColOne = document.querySelector(".colThree");
    const creaNumTile = document.createElement("div");
    console.log("Old value in the index location: " + this.board[3][getArrRef]);
    this.board[3][getArrRef] = this.numTile;
    getColFour.style.backgroundColor = "#b7b7a4";
    getColFour.style.height = "500px";
    getColFour.style.width = "65px";
    // getColTwo.style.boxShadow = "-5px 1px 0 0.8px #cb997e";
    getColFour.style.display = "flex";
    getColFour.style.flexDirection = "column-reverse";
    getColFour.style.zIndex = "1";
    console.log("Old value in the index location: " + this.board[3][getArrRef]);
    this.board[1][getArrRef] = this.numTile;
    creaNumTile.innerText = this.numTile;
    creaNumTile.style.display = "flex";
    creaNumTile.style.height = "40px";
    creaNumTile.style.width = "60px";
    creaNumTile.style.color = "rgb(0, 0, 0)";
    creaNumTile.style.textAlign = "center";
    creaNumTile.style.justifyContent = "center";
    creaNumTile.style.alignItems = "center";
    creaNumTile.style.marginTop = "2px";
    creaNumTile.style.marginBottom = "4px";
    creaNumTile.style.marginLeft = "0px";
    creaNumTile.style.paddingTop = "2px";
    creaNumTile.style.fontSize = "16px";
    creaNumTile.style.fontWeight = "800";
    creaNumTile.style.borderRadius = "10px";
    creaNumTile.style.boxShadow = "5px 5px 8px 0.8px #335c67";
    creaNumTile.style.zIndex = "1";
    if (this.numTile == 2) {
      creaNumTile.style.backgroundColor = "#e9d8a6";
      creaNumTile.innerText = "2";
    } else if (this.numTile == 4) {
      creaNumTile.style.backgroundColor = "#ee9b00";
      creaNumTile.innerText = "4";
    } else if (this.numTile == 8) {
      creaNumTile.style.backgroundColor = "#94d2bd";
      creaNumTile.innerText = "8";
    } else if (this.numTile == 16) {
      creaNumTile.style.backgroundColor = "#ca6702";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "16";
    } else if (this.numTile == 32) {
      creaNumTile.style.backgroundColor = "#0a9396";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "32";
    } else if (this.numTile == 64) {
      creaNumTile.style.backgroundColor = "#bb3e03";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "64";
    } else if ((this.numTile = 128)) {
      creaNumTile.style.backgroundColor = "#005f73";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "128";
    }
    getColFour.append(creaNumTile);
    console.log("New value in the index location: " + this.board[3][getArrRef]);
    console.log("Array after update is " + this.board[3]);
    this.randomNum();
  }

  updateColFive() {
    console.log("current random number is " + this.numTile);
    const getArrRef = this.board[4].indexOf(undefined);
    console.log("Column 5 - First Index where undef is " + getArrRef);
    // const getColOne = document.querySelector(".colFive");
    const creaNumTile = document.createElement("div");
    console.log("Old value in the index location: " + this.board[4][getArrRef]);
    this.board[4][getArrRef] = this.numTile;
    getColFive.style.backgroundColor = "#a5a58d";
    getColFive.style.height = "500px";
    getColFive.style.width = "65px";
    // getColTwo.style.boxShadow = "-5px 1px 0 0.8px #cb997e";
    getColFive.style.display = "flex";
    getColFive.style.flexDirection = "column-reverse";
    getColFive.style.zIndex = "1";
    creaNumTile.innerText = this.numTile;
    creaNumTile.style.display = "flex";
    creaNumTile.style.height = "40px";
    creaNumTile.style.width = "60px";
    creaNumTile.style.color = "rgb(0, 0, 0)";
    creaNumTile.style.textAlign = "center";
    creaNumTile.style.justifyContent = "center";
    creaNumTile.style.alignItems = "center";
    creaNumTile.style.marginTop = "2px";
    creaNumTile.style.marginBottom = "4px";
    creaNumTile.style.marginLeft = "0px";
    creaNumTile.style.paddingTop = "2px";
    creaNumTile.style.fontSize = "16px";
    creaNumTile.style.fontWeight = "800";
    creaNumTile.style.borderRadius = "10px";
    creaNumTile.style.boxShadow = "5px 5px 8px 0.8px #335c67";
    creaNumTile.style.zIndex = "1";
    if (this.numTile == 2) {
      creaNumTile.style.backgroundColor = "#e9d8a6";
      creaNumTile.innerText = "2";
    } else if (this.numTile == 4) {
      creaNumTile.style.backgroundColor = "#ee9b00";
      creaNumTile.innerText = "4";
    } else if (this.numTile == 8) {
      creaNumTile.style.backgroundColor = "#94d2bd";
      creaNumTile.innerText = "8";
    } else if (this.numTile == 16) {
      creaNumTile.style.backgroundColor = "#ca6702";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "16";
    } else if (this.numTile == 32) {
      creaNumTile.style.backgroundColor = "#0a9396";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "32";
    } else if (this.numTile == 64) {
      creaNumTile.style.backgroundColor = "#bb3e03";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "64";
    } else if ((this.numTile = 128)) {
      creaNumTile.style.backgroundColor = "#005f73";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "128";
    }
    getColFive.append(creaNumTile);
    console.log("New value in the index location: " + this.board[4][getArrRef]);
    console.log("Array after update is " + this.board[4]);

    this.randomNum();
  }

  updateColSix() {
    console.log("current random number is " + this.numTile);
    const getArrRef = this.board[5].indexOf(undefined);
    console.log("Column 6 - First Index where undef is " + getArrRef);
    // const getColOne = document.querySelector(".colSix");
    const creaNumTile = document.createElement("div");
    console.log("Old value in the index location: " + this.board[5][getArrRef]);
    this.board[5][getArrRef] = this.numTile;
    getColSix.style.backgroundColor = "#6b705c";
    getColSix.style.height = "500px";
    getColSix.style.width = "65px";
    // getColTwo.style.boxShadow = "-5px 1px 0 0.8px #cb997e";
    getColSix.style.display = "flex";
    getColSix.style.flexDirection = "column-reverse";
    getColSix.style.zIndex = "1";
    this.board[5][getArrRef] = this.numTile;
    creaNumTile.innerText = "this.numTile";
    creaNumTile.style.display = "flex";
    creaNumTile.style.height = "40px";
    creaNumTile.style.width = "60px";
    creaNumTile.style.color = "rgb(0, 0, 0)";
    creaNumTile.style.textAlign = "center";
    creaNumTile.style.justifyContent = "center";
    creaNumTile.style.alignItems = "center";
    creaNumTile.style.marginTop = "2px";
    creaNumTile.style.marginBottom = "4px";
    creaNumTile.style.marginLeft = "0px";
    creaNumTile.style.paddingTop = "2px";
    creaNumTile.style.fontSize = "16px";
    creaNumTile.style.fontWeight = "800";
    creaNumTile.style.borderRadius = "10px";
    creaNumTile.style.boxShadow = "5px 5px 8px 0.8px #335c67";
    creaNumTile.style.zIndex = "1";
    if (this.numTile == 2) {
      creaNumTile.style.backgroundColor = "#e9d8a6";
      creaNumTile.innerText = "2";
    } else if (this.numTile == 4) {
      creaNumTile.style.backgroundColor = "#ee9b00";
      creaNumTile.innerText = "4";
    } else if (this.numTile == 8) {
      creaNumTile.style.backgroundColor = "#94d2bd";
      creaNumTile.innerText = "8";
    } else if (this.numTile == 16) {
      creaNumTile.style.backgroundColor = "#ca6702";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "16";
    } else if (this.numTile == 32) {
      creaNumTile.style.backgroundColor = "#0a9396";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "32";
    } else if (this.numTile == 64) {
      creaNumTile.style.backgroundColor = "#bb3e03";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "64";
    } else if ((this.numTile = 128)) {
      creaNumTile.style.backgroundColor = "#005f73";
      creaNumTile.style.color = "white";
      creaNumTile.innerText = "128";
    }

    getColSix.append(creaNumTile);
    console.log("New value in the index location: " + this.board[5][getArrRef]);
    console.log("Array after update is " + this.board[5]);

    this.randomNum();
  }
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

//===========
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
//
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
