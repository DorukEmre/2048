import { startNewGame } from './init.js';
import { addResizeListener, addRestartButtonListener, addKeyPressListener } from './squareUtilities.js';


function main() {

  // Initialise and start a new game
  startNewGame();

  // Handles responsive square sizing
  addResizeListener();

  // Handles restart button click
  addRestartButtonListener();

  // Handles user input
  addKeyPressListener();

}

main();
