// selecting and inserting text initially in DOM
let gameBoardWrap = document.querySelector('.gameboard-wrap')
let gameBoard = document.querySelector('.gameboard');
let rolledBox = document.querySelector('.number');
let userScorePara = document.querySelector('.user-score');
let gameOver = document.createElement('h1'); 
 
// Globalvariable
let diamondCnt = 0;
let userScore = 0;
let count = 0;
let totalBoxNum = 64;

// inserting the initial text and setting the attributes.
gameOver.className = 'game-over';
gameBoardWrap.appendChild(gameOver);
rolledBox.textContent = `Number of boxes turned:${count}`;
userScorePara.textContent = `User Score:${userScore}`;


// create Arrow icon globally.
let arrowImg = document.createElement('img');
arrowImg.src = '../Assets/right-arrow.png';
arrowImg.setAttribute('class', 'arrow-img common-icon');

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
  let squareBoxChild = [...children];
  squareBoxChild.forEach((child) => {
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
      userScorePara.innerHTML = `User Score: ${userScore}`;

      setTimeout(() => {
        gameOver.textContent = `game over`;
      }, 500);
    }
  });
  // Track of no. of trurned boxex.
  rolledBox.innerHTML = `Number of boxes turned:${count}`;
}