import { gameState as gs, Move, Color } from './gameData.js';

function resetSquare(square) {
  square.element.style.backgroundColor = Color[0];
  square.element.textContent = "";
  square.canMove = false;
  square.value = 0;
}

function copySquare(fromSquare, toSquare) {
  toSquare.element.style.backgroundColor = Color[fromSquare.value];
  toSquare.element.textContent = fromSquare.value;
  toSquare.canMove = fromSquare.canMove;
  toSquare.value = fromSquare.value;
}

function doubleSquare(toSquare) {
  toSquare.value *= 2;
  toSquare.element.style.backgroundColor = Color[toSquare.value];
  toSquare.element.textContent = toSquare.value;
  toSquare.hasMerged = true;
}

function moveSquaresUp() {
  for (let i = 0; i <= 15; i++) {
    let copy = false;
    let double = false;
    let targetIndex = -1;

    if (gs.squares[i].canMove) {
      if (gs.squares[i].y == 1) {
        if (gs.squares[i - 4].canMove == false) {
          copy = true;
          targetIndex = i - 4;
        }
        else if (gs.squares[i - 4].canMove && !gs.squares[i - 4].hasMerged
          && gs.squares[i].value == gs.squares[i - 4].value) {
          double = true;
          targetIndex = i - 4;
        }
      }
      else if (gs.squares[i].y == 2) {
        if (gs.squares[i - 4].canMove == false) {
          copy = true;
          targetIndex = i - 4;

          if (gs.squares[i - 8].canMove == false) {
            targetIndex = i - 8;
          }
          else if (gs.squares[i - 8].canMove && !gs.squares[i - 8].hasMerged
            && gs.squares[i].value == gs.squares[i - 8].value) {
            double = true;
            targetIndex = i - 8;
          }
        }
        else if (gs.squares[i - 4].canMove && !gs.squares[i - 4].hasMerged
          && gs.squares[i].value == gs.squares[i - 4].value) {
          double = true;
          targetIndex = i - 4;
        }

      }
      else if (gs.squares[i].y == 3) {
        if (gs.squares[i - 4].canMove == false) {
          copy = true;
          targetIndex = i - 4;

          if (gs.squares[i - 8].canMove == false) {
            targetIndex = i - 8;
            if (gs.squares[i - 12].canMove == false) {
              copy = true;
              targetIndex = i - 12;
            }
            else if (gs.squares[i - 12].canMove && !gs.squares[i - 12].hasMerged
              && gs.squares[i].value == gs.squares[i - 12].value) {
              double = true;
              targetIndex = i - 12;
            }
          }
          else if (gs.squares[i - 8].canMove && !gs.squares[i - 8].hasMerged
            && gs.squares[i].value == gs.squares[i - 8].value) {
            double = true;
            targetIndex = i - 8;
          }
        }
        else if (gs.squares[i - 4].canMove && !gs.squares[i - 4].hasMerged
          && gs.squares[i].value == gs.squares[i - 4].value) {
          double = true;
          targetIndex = i - 4;
        }
      }

      if (double) {
        doubleSquare(gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${gs.squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(gs.squares[i], gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Moved square ${i} to position ${targetIndex}`);
      }

    }
  }
}

function moveSquaresDown() {
  for (let i = 15; i >= 0; i--) {
    let copy = false;
    let double = false;
    let targetIndex = -1;

    if (gs.squares[i].canMove) {
      // if (i <= 11 && gs.squares[i + 4].canMove == false) {
      //   let moveBy = 4;
      //   if (i <= 7 && gs.squares[i + 8].canMove == false) {
      //     moveBy = 8;
      //     if (i <= 3 && gs.squares[i + 12].canMove == false) {
      //       moveBy = 12;
      //     }
      //   }
      // }

      if (gs.squares[i].y == 2) {
        if (gs.squares[i + 4].canMove == false) {
          copy = true;
          targetIndex = i + 4;
        }
        else if (gs.squares[i + 4].canMove && !gs.squares[i + 4].hasMerged
          && gs.squares[i].value == gs.squares[i + 4].value) {
          double = true;
          targetIndex = i + 4;
        }
      }
      else if (gs.squares[i].y == 1) {
        if (gs.squares[i + 4].canMove == false) {
          copy = true;
          targetIndex = i + 4;

          if (gs.squares[i + 8].canMove == false) {
            targetIndex = i + 8;
          }
          else if (gs.squares[i + 8].canMove && !gs.squares[i + 8].hasMerged
            && gs.squares[i].value == gs.squares[i + 8].value) {
            double = true;
            targetIndex = i + 8;
          }
        }
        else if (gs.squares[i + 4].canMove && !gs.squares[i + 4].hasMerged
          && gs.squares[i].value == gs.squares[i + 4].value) {
          double = true;
          targetIndex = i + 4;
        }

      }
      else if (gs.squares[i].y == 0) {
        if (gs.squares[i + 4].canMove == false) {
          copy = true;
          targetIndex = i + 4;

          if (gs.squares[i + 8].canMove == false) {
            targetIndex = i + 8;
            if (gs.squares[i + 12].canMove == false) {
              copy = true;
              targetIndex = i + 12;
            }
            else if (gs.squares[i + 12].canMove && !gs.squares[i + 12].hasMerged
              && gs.squares[i].value == gs.squares[i + 12].value) {
              double = true;
              targetIndex = i + 12;
            }
          }
          else if (gs.squares[i + 8].canMove && !gs.squares[i + 8].hasMerged
            && gs.squares[i].value == gs.squares[i + 8].value) {
            double = true;
            targetIndex = i + 8;
          }
        }
        else if (gs.squares[i + 4].canMove && !gs.squares[i + 4].hasMerged && gs.squares[i].value == gs.squares[i + 4].value) {
          double = true;
          targetIndex = i + 4;
        }
      }

      if (double) {
        doubleSquare(gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${gs.squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(gs.squares[i], gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Moved square ${i} to position ${targetIndex}`);
      }

    }
  }
}

function moveSquaresLeft() {
  for (let i = 0; i <= 15; i++) {
    let copy = false;
    let double = false;
    let targetIndex = -1;

    if (gs.squares[i].canMove) {
      if (gs.squares[i].x == 1) {
        if (gs.squares[i - 1].canMove == false) {
          copy = true;
          targetIndex = i - 1;
        }
        else if (gs.squares[i - 1].canMove && !gs.squares[i - 1].hasMerged
          && gs.squares[i].value == gs.squares[i - 1].value) {
          double = true;
          targetIndex = i - 1;
        }
      }
      else if (gs.squares[i].x == 2) {
        if (gs.squares[i - 1].canMove == false) {
          copy = true;
          targetIndex = i - 1;

          if (gs.squares[i - 2].canMove == false) {
            targetIndex = i - 2;
          }
          else if (gs.squares[i - 2].canMove && !gs.squares[i - 2].hasMerged
            && gs.squares[i].value == gs.squares[i - 2].value) {
            double = true;
            targetIndex = i - 2;
          }
        }
        else if (gs.squares[i - 1].canMove && !gs.squares[i - 1].hasMerged
          && gs.squares[i].value == gs.squares[i - 1].value) {
          double = true;
          targetIndex = i - 1;
        }

      }
      else if (gs.squares[i].x == 3) {
        if (gs.squares[i - 1].canMove == false) {
          copy = true;
          targetIndex = i - 1;

          if (gs.squares[i - 2].canMove == false) {
            targetIndex = i - 2;
            if (gs.squares[i - 3].canMove == false) {
              copy = true;
              targetIndex = i - 3;
            }
            else if (gs.squares[i - 3].canMove && !gs.squares[i - 3].hasMerged
              && gs.squares[i].value == gs.squares[i - 3].value) {
              double = true;
              targetIndex = i - 3;
            }
          }
          else if (gs.squares[i - 2].canMove && !gs.squares[i - 2].hasMerged
            && gs.squares[i].value == gs.squares[i - 2].value) {
            double = true;
            targetIndex = i - 2;
          }
        }
        else if (gs.squares[i - 1].canMove && !gs.squares[i - 1].hasMerged
          && gs.squares[i].value == gs.squares[i - 1].value) {
          double = true;
          targetIndex = i - 1;
        }
      }

      if (double) {
        doubleSquare(gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${gs.squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(gs.squares[i], gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Moved square ${i} to position ${targetIndex}`);
      }

    }
  }
}


function moveSquaresRight() {
  for (let i = 15; i >= 0; i--) {
    let copy = false;
    let double = false;
    let targetIndex = -1;

    if (gs.squares[i].canMove) {
      if (gs.squares[i].x == 2) {
        if (gs.squares[i + 1].canMove == false) {
          copy = true;
          targetIndex = i + 1;
        }
        else if (gs.squares[i + 1].canMove && !gs.squares[i + 1].hasMerged
          && gs.squares[i].value == gs.squares[i + 1].value) {
          double = true;
          targetIndex = i + 1;
        }
      }
      else if (gs.squares[i].x == 1) {
        if (gs.squares[i + 1].canMove == false) {
          copy = true;
          targetIndex = i + 1;

          if (gs.squares[i + 2].canMove == false) {
            targetIndex = i + 2;
          }
          else if (gs.squares[i + 2].canMove && !gs.squares[i + 2].hasMerged
            && gs.squares[i].value == gs.squares[i + 2].value) {
            double = true;
            targetIndex = i + 2;
          }
        }
        else if (gs.squares[i + 1].canMove && !gs.squares[i + 1].hasMerged
          && gs.squares[i].value == gs.squares[i + 1].value) {
          double = true;
          targetIndex = i + 1;
        }

      }
      else if (gs.squares[i].x == 0) {
        if (gs.squares[i + 1].canMove == false) {
          copy = true;
          targetIndex = i + 1;

          if (gs.squares[i + 2].canMove == false) {
            targetIndex = i + 2;
            if (gs.squares[i + 3].canMove == false) {
              copy = true;
              targetIndex = i + 3;
            }
            else if (gs.squares[i + 3].canMove && !gs.squares[i + 3].hasMerged
              && gs.squares[i].value == gs.squares[i + 3].value) {
              double = true;
              targetIndex = i + 3;
            }
          }
          else if (gs.squares[i + 2].canMove && !gs.squares[i + 2].hasMerged
            && gs.squares[i].value == gs.squares[i + 2].value) {
            double = true;
            targetIndex = i + 2;
          }
        }
        else if (gs.squares[i + 1].canMove && !gs.squares[i + 1].hasMerged && gs.squares[i].value == gs.squares[i + 1].value) {
          double = true;
          targetIndex = i + 1;
        }
      }

      if (double) {
        doubleSquare(gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${gs.squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(gs.squares[i], gs.squares[targetIndex]);
        resetSquare(gs.squares[i]);
        gs.movedThisTurn = true;
        console.log(`Moved square ${i} to position ${targetIndex}`);
      }

    }
  }
}

function moveSquares(direction) {

  switch (direction) {
    case Move.UP:
      console.log('Moving up');
      moveSquaresUp();
      break;
    case Move.DOWN:
      console.log('Moving down');
      moveSquaresDown();
      break;
    case Move.LEFT:
      console.log('Moving left');
      moveSquaresLeft();
      break;
    case Move.RIGHT:
      console.log('Moving right');
      moveSquaresRight();
      break;
    default:
      console.log('Invalid move');
  }

}

export { moveSquares };
