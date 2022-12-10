console.log("linked");

class Gameboard {
  constructor(numTile) {
    this.numTile;
    this.isGameRunning = false;
    this.startCol = 3;
    this.colOne = [];
    this.colTwo = [];
    this.colThree = [];
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

      //   this.animateNumDrop();
    }
  }

  startGame() {
    const startGame = document.querySelector(".loadGame");
    // startGame.addEventListener("click", () => {
    this.isGameRunning = true;
    this.randomNum();
  }
}

const getModCont = document.querySelector(".modal-cont");
const getModalContent = document.querySelector(".modalContent");
const getModalBtn = document.querySelector(".modCont");
const getPlayerName = document.querySelector("#fname");
const showPlayerName = document.querySelector(".player");
// const showNxtTile = document.querySelector(".nextTile");
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
const arrColOneUpd = [];
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
