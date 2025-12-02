import { Move } from './gameData.js';
import { processMovement } from './gameEngine.js';

function getSquareSize() {

  const container = document.getElementById('square-container');

  let containerWidth = Math.min(container.offsetWidth, 500)

  // container width minus 20px total padding and 10px gap between squares
  let squareSize = (containerWidth - 20) / 4 - 10;

  return squareSize;
}


// Event listeners to resize squares on window resize

function updateSquareSizes() {
  let squareSize = getSquareSize();

  for (let i = 0; i <= 15; i++) {
    const square = document.getElementById(`square-${i}`);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.fontSize = `${squareSize / 2}px`;
  }
}

function addResizeListener() {

  window.addEventListener('resize', () => {
    updateSquareSizes();
  });

  window.addEventListener('onload', () => {
    updateSquareSizes();
  });

}

// Event listener for key presses
function addKeyPressListener() {

  // Move on key press if arrow key is pressed
  window.addEventListener('keydown', (event) => {
    if (Object.values(Move).includes(event.key)) {
      processMovement(event.key);
    }
  });

}

export { getSquareSize, addResizeListener, addKeyPressListener };
