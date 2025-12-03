import { gameState as gs } from './gameData.js';

function testMoveUp() {
  for (let i = 0; i <= 15; i++) {
    if (gs.squares[i].canMove
      && gs.squares[i].y > 0
      && (gs.squares[i - 4].canMove == false
        || gs.squares[i - 4].value == gs.squares[i].value)
    ) {
      return true;
    }
  }
  return false;
}

function testMoveDown() {
  for (let i = 15; i >= 0; i--) {
    if (gs.squares[i].canMove
      && gs.squares[i].y < 3
      && (gs.squares[i + 4].canMove == false
        || gs.squares[i + 4].value == gs.squares[i].value)
    ) {
      return true;
    }
  }
  return false;
}

function testMoveLeft() {
  for (let i = 0; i <= 15; i++) {
    if (gs.squares[i].canMove
      && gs.squares[i].x > 0
      && (gs.squares[i - 1].canMove == false
        || gs.squares[i - 1].value == gs.squares[i].value)
    ) {
      return true;
    }
  }
  return false;
}

function testMoveRight() {
  for (let i = 15; i >= 0; i--) {
    if (gs.squares[i].canMove
      && gs.squares[i].x < 3
      && (gs.squares[i + 1].canMove == false
        || gs.squares[i + 1].value == gs.squares[i].value)
    ) {
      return true;
    }
  }
  return false;
}

function checkGameOver() {

  let canMoveUp = testMoveUp();
  let canMoveDown = testMoveDown();
  let canMoveLeft = testMoveLeft();
  let canMoveRight = testMoveRight();

  console.log(`Can Move Up: ${canMoveUp}, Down: ${canMoveDown}, Left: ${canMoveLeft}, Right: ${canMoveRight}`);

  return canMoveUp == false && canMoveDown == false && canMoveLeft == false && canMoveRight == false;
}

export { checkGameOver };
