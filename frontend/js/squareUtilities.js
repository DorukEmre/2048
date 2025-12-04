import { Move } from './gameData.js';
import { handleTurn } from './gameEngine.js';
import { startNewGame } from './init.js';

function getSquareSize() {

  const container = document.getElementById('square-container');

  let containerWidth = Math.min(container.offsetWidth, 500)

  // container width minus 20px total padding and 10px gap between squares
  let squareSize = (containerWidth - 20) / 4 - 10;

  return squareSize;
}

// Set square size CSS variable in root element
function setSquareSize() {
  const squareSize = getSquareSize();

  document.documentElement.style.setProperty('--square-size', `${squareSize}px`);
}

// Event listeners to resize squares on window resize

function addResizeListener() {

  window.addEventListener('resize', setSquareSize);

  window.addEventListener('onload', setSquareSize);
}

// Event listener for restart button
function addRestartButtonListener() {
  const restartButton = document.getElementById('restart-btn');

  restartButton.addEventListener('click', startNewGame);
}

// Event listener for key presses
function addKeyPressListener() {

  // Move on key press if arrow key is pressed
  window.addEventListener('keydown', (event) => {
    if (Object.values(Move).includes(event.key)) {
      handleTurn(event.key);
    }
  });
}

export { setSquareSize, addResizeListener, addRestartButtonListener, addKeyPressListener };
