import { gameState as gs } from './gameData.js';

function testMoveUp() {
  for (let i = 0; i <= 15; i++) {
    if (gs.squares[i].canMove && gs.squares[i].y > 0) {
      for (let j = gs.squares[i].y - 1; j >= 0; j--) {
        let checkIndex = gs.squares[i].x + j * 4;
        if (gs.squares[checkIndex].canMove == false || gs.squares[checkIndex].value == gs.squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function testMoveDown() {
  for (let i = 15; i >= 0; i--) {
    if (gs.squares[i].canMove && gs.squares[i].y < 3) {
      for (let j = gs.squares[i].y + 1; j <= 3; j++) {
        let checkIndex = gs.squares[i].x + j * 4;
        if (gs.squares[checkIndex].canMove == false || gs.squares[checkIndex].value == gs.squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function testMoveLeft() {
  for (let i = 0; i <= 15; i++) {
    if (gs.squares[i].canMove && gs.squares[i].x > 0) {
      for (let j = gs.squares[i].x - 1; j >= 0; j--) {
        let checkIndex = j + gs.squares[i].y * 4;
        if (gs.squares[checkIndex].canMove == false || gs.squares[checkIndex].value == gs.squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function testMoveRight() {
  for (let i = 15; i >= 0; i--) {
    if (gs.squares[i].canMove && gs.squares[i].x < 3) {
      for (let j = gs.squares[i].x + 1; j <= 3; j++) {
        let checkIndex = j + gs.squares[i].y * 4;
        if (gs.squares[checkIndex].canMove == false || gs.squares[checkIndex].value == gs.squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkGameOver() {
  return false;

  let canMoveUp = testMoveUp();
  let canMoveDown = testMoveDown();
  let canMoveLeft = testMoveLeft();
  let canMoveRight = testMoveRight();

  console.log(`Can Move Up: ${canMoveUp}, Down: ${canMoveDown}, Left: ${canMoveLeft}, Right: ${canMoveRight}`);

  return canMoveUp == false && canMoveDown == false && canMoveLeft == false && canMoveRight == false;
}

export { checkGameOver };
