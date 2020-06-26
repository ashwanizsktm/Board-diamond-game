// Getting section globally that can be used throughout the app.
let gameBoard = document.querySelector('.gameboard');

for (let i = 0; i < 64; i++) {
  let squareBox = document.createElement('div');
  let quesIcon = document.createElement('img');
  quesIcon.src = '../Assets/question-mark.png';
  quesIcon.setAttribute('class', 'ques-icon');
  squareBox.className = 'square-box';
  squareBox.setAttribute("onclick", "getDiamondImg()");
  squareBox.appendChild(quesIcon);
  gameBoard.appendChild(squareBox);
}

let n = 8;
var arr = Array.from(gameBoard.children);
let shuffled = arr.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, n);
selected.forEach((item) => {
  item.innerHTML = `<img src="../Assets/diamond.jpg" class="diamond-icon"/>`;
});
