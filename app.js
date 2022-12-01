console.log("loaded");

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

function loadGame() {
  console.log("This is a test");
  getModCont.style.display = "none";
  getModalContent.style.display = "none";
  showPlayerName.textContent = "PLAYER: " + getPlayerName.value;
}
// const getModBtn = document.querySelector(".modCont");
getModalBtn.addEventListener("click", loadGame);
