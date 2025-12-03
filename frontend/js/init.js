import { getSquareSize } from './squareUtilities.js';
import { revealSquare } from './gameEngine.js';
import { gameState as gs, Color } from './gameData.js';
import { drawSquares, updateScore } from './gameEngine.js';

function initialiseSquareObjects(squares) {

  for (let i = 0; i <= 15; i++) {
    squares.push({
      id: i,
      x: i % 4,
      y: Math.floor(i / 4),
      canMove: false,
      hasMerged: false,
      value: 0,
      element: null,
    });
  }

  let squareSize = getSquareSize();

  // Create and assign DOM elements to each square object
  squares.forEach((square, i) => {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.id = `square-${i}`;
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    squareDiv.style.fontSize = `${squareSize / 2}px`;
    squareDiv.style.backgroundColor = Color[0];
    square.element = squareDiv;
  });

}

function initialReveal(squares) {
  const revealedIndices = new Set();

  while (revealedIndices.size < 2) {
    const randomIndex = Math.floor(Math.random() * squares.length);
    revealedIndices.add(randomIndex);
  }

  revealedIndices.forEach(index => {
    const square = squares[index];
    revealSquare(square);
  });
}

function initialiseGameState() {
  gs.squares = [];
  gs.movedThisTurn = false;
  gs.isGameOver = false;
  gs.hasWon = false;
  gs.score = 0;
}

function restoreHeader() {
  const title = document.getElementById('title');
  title.textContent = "2048";

  const header = document.querySelector('header');
  header.classList.remove('victory', 'gameover');

  updateScore();
}

function startNewGame() {

  // Initialise game state
  initialiseGameState();

  // Restore header to initial state
  restoreHeader();

  // Initialise array of square objects
  initialiseSquareObjects(gs.squares);

  // Reveal two initial squares
  initialReveal(gs.squares);

  // Draw initial squares on the DOM grid
  drawSquares();
}

export { startNewGame };
