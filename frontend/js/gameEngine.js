import { checkGameOver } from './gameover.js';
import { moveSquares } from './squareMovement.js';
import { gameState as gs, Move, Color } from './gameData.js';


function revealSquare(square) {
  square.canMove = true;
  square.value = 2;
  square.element.textContent = '2';
  square.element.style.backgroundColor = Color[2];
  square.element.classList.add('revealed');
}


function revealNewSquare() {
  const emptySquares = gs.squares.filter(square => square.canMove == false);

  if (emptySquares.length === 0) {
    console.log('No empty squares available to reveal a new square - Game over');
    return;
  }

  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  const squareToReveal = emptySquares[randomIndex];

  revealSquare(squareToReveal);

  console.log(`Revealed new square at position ${squareToReveal.id}`);
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = gs.score;
}

function handleWin() {
  const title = document.getElementById('title');
  title.textContent = "Victory!";

  const header = document.querySelector('header');
  header.classList.add('victory');
}

function handleGameOver() {
  const title = document.getElementById('title');
  title.textContent = "Game Over!";

  const header = document.querySelector('header');
  header.classList.add('gameover');
}

function checkWinCondition() {
  const maxSquareValue = 2048;

  return gs.squares.some(square => square.value === maxSquareValue);
}

function handleTurn(direction) {
  if (gs.isGameOver || gs.hasWon) {
    return;
  }

  gs.movedThisTurn = false;

  // Remove reveal animation classes from all squares
  gs.squares.forEach(square => {
    square.element.classList.remove('revealed');
  });

  // Remove hasMerged flags from all squares
  gs.squares.forEach(square => {
    square.hasMerged = false;
  });

  moveSquares(direction);


  if (gs.movedThisTurn)
    revealNewSquare();

  drawSquares();

  updateScore();

  gs.hasWon = checkWinCondition();
  if (gs.hasWon)
    handleWin();

  gs.isGameOver = checkGameOver();
  if (gs.isGameOver)
    handleGameOver();

  console.log(gs.squares);
}

// Draw squares on the DOM grid
function drawSquares() {

  const container = document.getElementById('square-container');

  // Clear existing squares
  container.innerHTML = '';

  // Append each square element to the container
  gs.squares.forEach(square => {
    container.appendChild(square.element);
  });
}


export { handleTurn, revealNewSquare, revealSquare, drawSquares, updateScore };
