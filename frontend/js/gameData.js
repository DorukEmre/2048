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

const gameState = {
  squares: [],
  movedThisTurn: false,
  isGameOver: false,
};

export { Move, Color, gameState };
