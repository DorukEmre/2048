
function moveSquaresUp() {
  for (let i = 0; i <= 15; i++) {
    let copy = false;
    let double = false;
    let targetIndex = -1;

    if (squares[i].canMove) {
      if (squares[i].y == 1) {
        if (squares[i - 4].canMove == false) {
          copy = true;
          targetIndex = i - 4;
        }
        else if (squares[i - 4].canMove && !squares[i - 4].hasMerged
          && squares[i].value == squares[i - 4].value) {
          double = true;
          targetIndex = i - 4;
        }
      }
      else if (squares[i].y == 2) {
        if (squares[i - 4].canMove == false) {
          copy = true;
          targetIndex = i - 4;

          if (squares[i - 8].canMove == false) {
            targetIndex = i - 8;
          }
          else if (squares[i - 8].canMove && !squares[i - 8].hasMerged
            && squares[i].value == squares[i - 8].value) {
            double = true;
            targetIndex = i - 8;
          }
        }
        else if (squares[i - 4].canMove && !squares[i - 4].hasMerged
          && squares[i].value == squares[i - 4].value) {
          double = true;
          targetIndex = i - 4;
        }

      }
      else if (squares[i].y == 3) {
        if (squares[i - 4].canMove == false) {
          copy = true;
          targetIndex = i - 4;

          if (squares[i - 8].canMove == false) {
            targetIndex = i - 8;
            if (squares[i - 12].canMove == false) {
              copy = true;
              targetIndex = i - 12;
            }
            else if (squares[i - 12].canMove && !squares[i - 12].hasMerged
              && squares[i].value == squares[i - 12].value) {
              double = true;
              targetIndex = i - 12;
            }
          }
          else if (squares[i - 8].canMove && !squares[i - 8].hasMerged
            && squares[i].value == squares[i - 8].value) {
            double = true;
            targetIndex = i - 8;
          }
        }
        else if (squares[i - 4].canMove && !squares[i - 4].hasMerged
          && squares[i].value == squares[i - 4].value) {
          double = true;
          targetIndex = i - 4;
        }
      }

      if (double) {
        doubleSquare(squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(squares[i], squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
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

    if (squares[i].canMove) {
      // if (i <= 11 && squares[i + 4].canMove == false) {
      //   let moveBy = 4;
      //   if (i <= 7 && squares[i + 8].canMove == false) {
      //     moveBy = 8;
      //     if (i <= 3 && squares[i + 12].canMove == false) {
      //       moveBy = 12;
      //     }
      //   }
      // }

      if (squares[i].y == 2) {
        if (squares[i + 4].canMove == false) {
          copy = true;
          targetIndex = i + 4;
        }
        else if (squares[i + 4].canMove && !squares[i + 4].hasMerged
          && squares[i].value == squares[i + 4].value) {
          double = true;
          targetIndex = i + 4;
        }
      }
      else if (squares[i].y == 1) {
        if (squares[i + 4].canMove == false) {
          copy = true;
          targetIndex = i + 4;

          if (squares[i + 8].canMove == false) {
            targetIndex = i + 8;
          }
          else if (squares[i + 8].canMove && !squares[i + 8].hasMerged
            && squares[i].value == squares[i + 8].value) {
            double = true;
            targetIndex = i + 8;
          }
        }
        else if (squares[i + 4].canMove && !squares[i + 4].hasMerged
          && squares[i].value == squares[i + 4].value) {
          double = true;
          targetIndex = i + 4;
        }

      }
      else if (squares[i].y == 0) {
        if (squares[i + 4].canMove == false) {
          copy = true;
          targetIndex = i + 4;

          if (squares[i + 8].canMove == false) {
            targetIndex = i + 8;
            if (squares[i + 12].canMove == false) {
              copy = true;
              targetIndex = i + 12;
            }
            else if (squares[i + 12].canMove && !squares[i + 12].hasMerged
              && squares[i].value == squares[i + 12].value) {
              double = true;
              targetIndex = i + 12;
            }
          }
          else if (squares[i + 8].canMove && !squares[i + 8].hasMerged
            && squares[i].value == squares[i + 8].value) {
            double = true;
            targetIndex = i + 8;
          }
        }
        else if (squares[i + 4].canMove && !squares[i + 4].hasMerged && squares[i].value == squares[i + 4].value) {
          double = true;
          targetIndex = i + 4;
        }
      }

      if (double) {
        doubleSquare(squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(squares[i], squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
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

    if (squares[i].canMove) {
      if (squares[i].x == 1) {
        if (squares[i - 1].canMove == false) {
          copy = true;
          targetIndex = i - 1;
        }
        else if (squares[i - 1].canMove && !squares[i - 1].hasMerged
          && squares[i].value == squares[i - 1].value) {
          double = true;
          targetIndex = i - 1;
        }
      }
      else if (squares[i].x == 2) {
        if (squares[i - 1].canMove == false) {
          copy = true;
          targetIndex = i - 1;

          if (squares[i - 2].canMove == false) {
            targetIndex = i - 2;
          }
          else if (squares[i - 2].canMove && !squares[i - 2].hasMerged
            && squares[i].value == squares[i - 2].value) {
            double = true;
            targetIndex = i - 2;
          }
        }
        else if (squares[i - 1].canMove && !squares[i - 1].hasMerged
          && squares[i].value == squares[i - 1].value) {
          double = true;
          targetIndex = i - 1;
        }

      }
      else if (squares[i].x == 3) {
        if (squares[i - 1].canMove == false) {
          copy = true;
          targetIndex = i - 1;

          if (squares[i - 2].canMove == false) {
            targetIndex = i - 2;
            if (squares[i - 3].canMove == false) {
              copy = true;
              targetIndex = i - 3;
            }
            else if (squares[i - 3].canMove && !squares[i - 3].hasMerged
              && squares[i].value == squares[i - 3].value) {
              double = true;
              targetIndex = i - 3;
            }
          }
          else if (squares[i - 2].canMove && !squares[i - 2].hasMerged
            && squares[i].value == squares[i - 2].value) {
            double = true;
            targetIndex = i - 2;
          }
        }
        else if (squares[i - 1].canMove && !squares[i - 1].hasMerged
          && squares[i].value == squares[i - 1].value) {
          double = true;
          targetIndex = i - 1;
        }
      }

      if (double) {
        doubleSquare(squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(squares[i], squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
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

    if (squares[i].canMove) {
      if (squares[i].x == 2) {
        if (squares[i + 1].canMove == false) {
          copy = true;
          targetIndex = i + 1;
        }
        else if (squares[i + 1].canMove && !squares[i + 1].hasMerged
          && squares[i].value == squares[i + 1].value) {
          double = true;
          targetIndex = i + 1;
        }
      }
      else if (squares[i].x == 1) {
        if (squares[i + 1].canMove == false) {
          copy = true;
          targetIndex = i + 1;

          if (squares[i + 2].canMove == false) {
            targetIndex = i + 2;
          }
          else if (squares[i + 2].canMove && !squares[i + 2].hasMerged
            && squares[i].value == squares[i + 2].value) {
            double = true;
            targetIndex = i + 2;
          }
        }
        else if (squares[i + 1].canMove && !squares[i + 1].hasMerged
          && squares[i].value == squares[i + 1].value) {
          double = true;
          targetIndex = i + 1;
        }

      }
      else if (squares[i].x == 0) {
        if (squares[i + 1].canMove == false) {
          copy = true;
          targetIndex = i + 1;

          if (squares[i + 2].canMove == false) {
            targetIndex = i + 2;
            if (squares[i + 3].canMove == false) {
              copy = true;
              targetIndex = i + 3;
            }
            else if (squares[i + 3].canMove && !squares[i + 3].hasMerged
              && squares[i].value == squares[i + 3].value) {
              double = true;
              targetIndex = i + 3;
            }
          }
          else if (squares[i + 2].canMove && !squares[i + 2].hasMerged
            && squares[i].value == squares[i + 2].value) {
            double = true;
            targetIndex = i + 2;
          }
        }
        else if (squares[i + 1].canMove && !squares[i + 1].hasMerged && squares[i].value == squares[i + 1].value) {
          double = true;
          targetIndex = i + 1;
        }
      }

      if (double) {
        doubleSquare(squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
        console.log(`Merged square ${i} with square ${targetIndex} to form ${squares[targetIndex].value}`);
      }
      else if (copy) {
        copySquare(squares[i], squares[targetIndex]);
        resetSquare(squares[i]);
        movedThisTurn = true;
        console.log(`Moved square ${i} to position ${targetIndex}`);
      }

    }
  }
}

function testMoveUp() {
  for (let i = 0; i <= 15; i++) {
    if (squares[i].canMove && squares[i].y > 0) {
      for (let j = squares[i].y - 1; j >= 0; j--) {
        let checkIndex = squares[i].x + j * 4;
        if (squares[checkIndex].canMove == false || squares[checkIndex].value == squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function testMoveDown() {
  for (let i = 15; i >= 0; i--) {
    if (squares[i].canMove && squares[i].y < 3) {
      for (let j = squares[i].y + 1; j <= 3; j++) {
        let checkIndex = squares[i].x + j * 4;
        if (squares[checkIndex].canMove == false || squares[checkIndex].value == squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function testMoveLeft() {
  for (let i = 0; i <= 15; i++) {
    if (squares[i].canMove && squares[i].x > 0) {
      for (let j = squares[i].x - 1; j >= 0; j--) {
        let checkIndex = j + squares[i].y * 4;
        if (squares[checkIndex].canMove == false || squares[checkIndex].value == squares[i].value) {
          return true;
        }
      }
    }
  }
  return false;
}

function testMoveRight() {
  for (let i = 15; i >= 0; i--) {
    if (squares[i].canMove && squares[i].x < 3) {
      for (let j = squares[i].x + 1; j <= 3; j++) {
        let checkIndex = j + squares[i].y * 4;
        if (squares[checkIndex].canMove == false || squares[checkIndex].value == squares[i].value) {
          return true;
        }
      }
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

