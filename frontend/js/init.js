import { getSquareSize } from './squareUtilities.js';
import { revealSquare } from './gameEngine.js';
import { Color } from './gameData.js';

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

  while (revealedIndices.size < 1) {
    const randomIndex = Math.floor(Math.random() * squares.length);
    revealedIndices.add(randomIndex);
  }

  revealedIndices.forEach(index => {
    const square = squares[index];
    revealSquare(square);
  });

}

export { initialiseSquareObjects, initialReveal };