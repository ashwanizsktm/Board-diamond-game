// Getting section globally that can be used throughout the app.
let gameBoard = document.querySelector('.gameboard');
// let squareBox = gameBoard.children;

for (let i = 0; i < 64; i++) {
  let squareBox = document.createElement('div');
  let quesIcon = document.createElement('img');
  quesIcon.src = '../Assets/question-mark.png';
  quesIcon.setAttribute('class', 'ques-icon common-icon');
  squareBox.className = 'square-box';
  squareBox.setAttribute("onclick", "getDiamondImg(event)");
  squareBox.appendChild(quesIcon);
  gameBoard.appendChild(squareBox);
}

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

function getDiamondImg(event) {
  event.preventDefault();
  let squareBox = document.querySelectorAll('.square-box');
  for(let i = 0 ; i < squareBox.length ; i++) {
    squareBox[i].addEventListener('click', function() {
      let newarr = squareBox[i];
      console.log(newarr, i);
      newarr.removeChild(newarr.children[1]);
    });
  }
}