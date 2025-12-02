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

  console.log(`Revealed new square at position ${squareToReveal.id - 1}`);
}


function processMovement(direction) {
  if (gs.isGameOver) {
    console.log('Game is over. No more moves can be made.');
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

  gs.isGameOver = checkGameOver();
  if (gs.isGameOver) {
    alert("Game Over! No more moves available.");
  }

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


export { processMovement, revealNewSquare, revealSquare, drawSquares };
