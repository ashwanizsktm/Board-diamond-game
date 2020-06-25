// Getting section globally that can be used throughout the app.
let gameBoard = document.querySelector('.gameboard');


for(let i = 0; i < 64; i++){
  let squareBox = document.createElement('div');
  let quesIcon = document.createElement('img');
  quesIcon.src = '../Assets/question-mark.png';
  quesIcon.setAttribute('class', 'ques-icon');
  squareBox.className = 'square-box';
  squareBox.setAttribute("onclick", "getDiamondImg()");
  squareBox.appendChild(quesIcon);
  gameBoard.appendChild(squareBox);
}

function getDiamondImg(){
  e.style.display = 'none';
}

