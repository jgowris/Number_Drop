console.log("loaded");

/* ========= PSUEDO CODE ===========

High-level steps to achieve before writing the pseudo code:

1. Identify the numbers in scope for the game.
2. Identify the numbers that will be in the loop for user selection.
3. Generate a random number for drop.
3. Complete proof of concept for one number tile getting to the base.
4. Complete proof of concept for a different tile settling on top of another tile.
5. Complete proof of concept for two tiles of the same number (horizontal drop) getting added to a single tile.
6. Extend 5 to add two tiles having same number, but vertically aligned.
7. Adjust the alignment for each calculation.
8. Update the Points earned for every merge.




*/

const numberRoll = [2, 4, 8, 16, 32, 64, 128];
console.log("number roll is " + numberRoll);

const numbArr = [
  {
    nbr: 2,
    fromClr: "#e9d8a6",
    tgtClr: "#ee9b00",
  },
  {
    nbr: 4,
    fromClr: "#ee9b00",
    tgtClr: "#94d2bd",
  },
  {
    nbr: 8,
    fromClr: "#94d2bd",
    tgtClr: "#ca6702",
  },
  {
    nbr: 16,
    fromClr: "#ca6702",
    tgtClr: "#0a9396",
  },
  {
    nbr: 32,
    fromClr: "#0a9396",
    tgtClr: "#bb3e03",
  },
  {
    nbr: 64,
    fromClr: "#bb3e03",
    tgtClr: "#005f73",
  },
  {
    nbr: 128,
    fromClr: "#005f73",
    tgtClr: "#ae2012",
  },
  {
    nbr: 256,
    fromClr: "#ae2012",
    tgtClr: "#9b2226",
  },
  {
    nbr: 512,
    fromClr: "#9b2226",
    tgtClr: "#5f0f40",
  },
  {
    nbr: 1024,
    fromClr: "#5f0f40",
    tgtClr: "#001219",
  },
];

// .numberTwo {
//     background-color: #e9d8a6;
//     color: rgb(0, 0, 0);
//   }
//   .numberFour {
//     background-color: #ee9b00;
//     color: rgb(0, 0, 0);
//   }
//   .numberEight {
//     background-color: #94d2bd;
//     color: rgb(0, 0, 0);
//   }
//   .numbersSixteen {
//     background-color: #ca6702;
//   }
//   .numbersThirtyTwo {
//     background-color: #0a9396;
//   }
//   .numbersSixtyFour {
//     background-color: #bb3e03;
//   }
//   .numbersOneTwoEight {
//     background-color: #005f73;
//   }
//   .numbersTwoFiveSix {
//     background-color: #ae2012;
//   }
//   .numbersFiveOneTwo {
//     background-color: #9b2226;
//   }
//   .numbersOneZTwoFour {
//     background-color: #5f0f40;
//   }
//   .numbersTwoZFourEIght {
//     background-color: #001219;
//     color: rgb(255, 255, 255);
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
function nxtNumberTile() {
  let getRandomNumberRoll = Math.floor(Math.random() * numberRoll.length);
  const rdmNumber = numberRoll[getRandomNumberRoll];
  console.log("Next number is " + rdmNumber);
  const getNxtTile = document.querySelector(".nextTile");
  getNxtTile.textContent = "COMING UP... " + rdmNumber;
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
getModalBtn.addEventListener("click", closeLoadModal);
startGame.addEventListener("click", loadGame);
getAboutGameBtn.addEventListener("click", dispAboutGameModal);
getAboutGameModalCloseBtn.addEventListener("click", closeModalForAboutGame);

getGameRulesBtn.addEventListener("click", dispGameRulesModal);
getGameRulesModalCloseBtn.addEventListener("click", closeModalForGameRules);
