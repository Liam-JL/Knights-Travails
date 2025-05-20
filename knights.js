const boardGraph = {};

const knightMoves = [
  [2, 1], [2, -1],
  [-2, 1], [-2, -1],
  [1, 2], [1, -2],
  [-1, 2], [-1, -2]
];

function isValid(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

//Generate adjacency list
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const key = `${row},${col}` 
    boardGraph[key] = [];

    for(const [knightRow, knightCol] of knightMoves) {
      const newRow = row + knightRow;
      const newCol = col + knightCol;
      if (isValid(newRow, newCol)) {
        boardGraph[key].push(`${newRow},${newCol}`);
      }
    }
  }
}



