
import { gameState as gs, Move, Color } from './gameData.js';
import { initialiseSquareObjects, initialReveal } from './init.js';
import { drawSquares } from './gameEngine.js';
import { addResizeListener, addKeyPressListener } from './squareUtilities.js';


function main() {

  // Initialise array of square objects
  initialiseSquareObjects(gs.squares);

  // Reveal two initial squares
  initialReveal(gs.squares);

  // Draw initial squares on the DOM grid
  drawSquares();

  console.log(gs.squares);

  // Handles responsive square sizing
  addResizeListener();

  // Handles user input
  addKeyPressListener();
}

main();
