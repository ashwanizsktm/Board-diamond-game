// selecting and inserting text initially in DOM
let gameBoardWrap = document.querySelector('.gameboard-wrap')
let gameBoard = document.querySelector('.gameboard');
let rolledBox = document.querySelector('.number');
let userScorePara = document.querySelector('.user-score');
let gameOver = document.createElement('h1');

// create Arrow icon globally.
// left arrow
let leftArrowImg = document.createElement('img');
leftArrowImg.src = '../Assets/left-arrow.png';
leftArrowImg.setAttribute('class', 'arrow-img common-icon');

// right Arrow
let rightArrowImg = document.createElement('img');
rightArrowImg.src = '../Assets/right-arrow.png';
rightArrowImg.setAttribute('class', 'arrow-img common-icon');

// Globalvariable
let diamondCnt = 0;
let userScore = 0;
let count = 0;
let totalBoxNum = 64;

// inserting the initial text and setting the attributes.
gameOver.className = 'game-over';
gameBoardWrap.appendChild(gameOver);
rolledBox.textContent = `Number of boxes turned:${count}`;
userScorePara.textContent = `User Initial Score:${userScore}`;

// Generating 64 boxes with with question mark initially dymaically.
for (let i = 0; i < 64; i++) {
  let squareBox = document.createElement('div');
  let quesIcon = document.createElement('img');
  quesIcon.src = '../Assets/question-mark.png';
  quesIcon.setAttribute('class', 'ques-icon common-icon');
  squareBox.className = 'square-box';
  squareBox.setAttribute("onclick", "getDiamondImg(this, this.children)");
  squareBox.appendChild(quesIcon);
  gameBoard.appendChild(squareBox);
}

// generating 8 random index everytime throught the on gameboard.
let n = 8;
var arr = Array.from(gameBoard.children);
let shuffled = arr.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, n);
console.log(selected);

selected.forEach((item) => {
  item.innerHTML = `
  <img src="../Assets/diamond.jpg" class="diamond-icon common-icon"/>
  <img src="../Assets/question-mark.png" class="ques-icon common-icon"/>
  `;
});

// This function get triggered while clicking the box.
function getDiamondImg(parent, children) {

  // Getting Previous and next sibling onclick of box
  let next = parent.nextElementSibling;
  let previous = parent.previousElementSibling;
  if (previous == null) {
    previous = document.createElement("div");
  } else if (next == null) {
    next = document.createElement("div");
  }

  let squareBoxChild = [...children];
  squareBoxChild.forEach((child) => {

    /* Start of Advanced Section where user get hints as arrow while searching diamond*/
    if (
      next.children.length != 0 &&
      children.length != 2 &&
      next.children[0].classList.contains("diamond-icon")
    ) {
      parent.appendChild(rightArrowImg);
    } else if (
      previous.children.length != 0 &&
      children.length != 2 &&
      previous.children[0].classList.contains("diamond-icon")
    ) {
      parent.appendChild(leftArrowImg);
    }
    /* End of Advanced Section code*/

    if (child.classList.contains("ques-icon")) {
      parent.removeChild(child);
      count++;
    }

    if (child.classList.contains("diamond-icon")) {
      diamondCnt++;
    }

    if (diamondCnt == 8) {
      gameBoard.style.pointerEvents = "none";
      userScore = totalBoxNum - count;
      userScorePara.innerHTML = `User Final Score: ${userScore}`;

      setTimeout(() => {
        gameOver.textContent = `game over`;
      }, 500);
    }
  });

  // Track of no. of trurned boxex.
  rolledBox.innerHTML = `Number of boxes turned:${count}`;
}