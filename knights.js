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

function getShortestRoute(startVertex, targetVertex) {

  let queue = [[startVertex]];
  let visited = new Set();
  visited.add(startVertex);

  while (queue.length > 0) {
    let path = queue.shift();
    let current = path[path.length - 1] //Current vertex

    if (current === targetVertex) {
      return path;
    }

    for (let neighbour of boardGraph[current]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([...path, neighbour]);
        
      }
    }
  }

  return null
}

const route = getShortestRoute('0,0', '0,3')
console.log(route)