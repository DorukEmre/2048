const container = document.getElementById('square-container');

const Move = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
}

function getSquareSize() {
  let containerWidth = Math.min(container.offsetWidth, 500)

  // container width minus 20px total padding and 10px gap between squares
  let squareSize = (containerWidth - 20) / 4 - 10;

  return squareSize;
}

function initialiseSquares(squareSize) {
  const squares = [];

  for (let i = 0; i < 16; i++) {
    squares.push({
      id: i,
      position: i,
      canMove: false,
      element: null,
      value: 0
    });
  }

  squares.forEach((square, i) => {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.id = `square-${i}`;
    squareDiv.dataset.position = square.position; // Optional data attribute
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    squareDiv.style.fontSize = `${squareSize / 2}px`;
    square.element = squareDiv;
    container.appendChild(squareDiv);
  });

  return squares;
}

function initialReveal(squares) {
  const revealedIndices = new Set();

  while (revealedIndices.size < 2) {
    const randomIndex = Math.floor(Math.random() * squares.length);
    revealedIndices.add(randomIndex);
  }

  revealedIndices.forEach(index => {
    const square = squares[index];
    square.value = 2;
    square.element.textContent = '2';
    square.canMove = true;
    square.element.style.backgroundColor = '#c6b8aaff';
  });
}

let squareSize = getSquareSize();
const squares = initialiseSquares(squareSize);
initialReveal(squares);


function moveSquares(direction) {
  switch (direction) {
    case Move.UP:
      console.log('Moving up');
      break;
    case Move.DOWN:
      console.log('Moving down');
      break;
    case Move.LEFT:
      console.log('Moving left');
      break;
    case Move.RIGHT:
      console.log('Moving right');
      break;
    default:
      console.log('Invalid move');
  }

  console.log(squares);
}

// Resize squares on window resize

function updateSquareSizes() {
  for (let i = 0; i < 16; i++) {
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

// On key press, log the key in the footer
window.addEventListener('keydown', (event) => {
  if (Object.values(Move).includes(event.key)) {
    const footer = document.querySelector('footer');
    footer.textContent = `Key pressed: ${event.key}`;

    moveSquares(event.key);
  }
});

