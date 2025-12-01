const container = document.getElementById('square-container');

const Move = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
}

const Color = {
  0: '#988675ff',
  2: '#c6b8aaff',
  4: '#ede0c8ff',
  8: '#f2b179ff',
  16: '#f59563ff',
  32: '#f67c5fff',
  64: '#f65e3bff',
  128: '#edcf72ff',
  256: '#edcc61ff',
  512: '#edc850ff',
  1024: '#edc53fff',
  2048: '#edc22eff'
}

let movedThisTurn = false;
let isGameOver = false;


function getSquareSize() {
  let containerWidth = Math.min(container.offsetWidth, 500)

  // container width minus 20px total padding and 10px gap between squares
  let squareSize = (containerWidth - 20) / 4 - 10;

  return squareSize;
}


function initialiseSquareObjects() {
  const squares = [];

  for (let i = 1; i <= 16; i++) {
    squares.push({
      id: i,
      x: (i - 1) % 4,
      y: Math.floor((i - 1) / 4),
      canMove: false,
      hasMerged: false,
      value: 0,
      element: null,
    });
  }

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

  return squares;
}

// Draw squares on the grid
function drawSquares() {
  // Clear existing squares
  container.innerHTML = '';

  // Each square element to the container
  squares.forEach(square => {
    container.appendChild(square.element);
  });
}

function revealSquare(square) {
  square.canMove = true;
  square.value = 2;
  square.element.textContent = '2';
  square.element.style.backgroundColor = Color[2];
  square.element.classList.add('revealed');
}

function initialReveal() {
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

let squareSize = getSquareSize();
const squares = initialiseSquareObjects();
initialReveal();
drawSquares();
console.log(squares);

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

function revealNewSquare() {
  const emptySquares = squares.filter(square => square.canMove == false);

  if (emptySquares.length === 0) {
    console.log('No empty squares available to reveal a new square - Game over');
    return;
  }

  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  const squareToReveal = emptySquares[randomIndex];

  revealSquare(squareToReveal);

  console.log(`Revealed new square at position ${squareToReveal.id - 1}`);
}

function moveSquares(direction) {
  if (isGameOver) {
    console.log('Game is over. No more moves can be made.');
    return;
  }

  movedThisTurn = false;

  // Remove reveal animation classes from all squares
  squares.forEach(square => {
    square.element.classList.remove('revealed');
  });

  // Remove hasMerged flags from all squares
  squares.forEach(square => {
    square.hasMerged = false;
  });

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

  if (movedThisTurn)
    revealNewSquare();

  drawSquares();

  isGameOver = checkGameOver();
  if (isGameOver) {
    alert("Game Over! No more moves available.");
  }

  console.log(squares);
}

// Resize squares on window resize

function updateSquareSizes() {
  for (let i = 1; i <= 16; i++) {
    const square = document.getElementById(`square-${i}`);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.fontSize = `${squareSize / 2}px`;
  }
}

window.addEventListener('resize', () => {
  squareSize = getSquareSize();
  updateSquareSizes();
});

window.addEventListener('onload', () => {
  squareSize = getSquareSize();
  updateSquareSizes();
});

// Move on key press if arrow key is pressed
window.addEventListener('keydown', (event) => {
  if (Object.values(Move).includes(event.key)) {
    moveSquares(event.key);
  }
});

