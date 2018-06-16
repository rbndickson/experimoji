import update from "immutability-helper";
import { shuffle } from "./helpers";

function placements(size, isIncludingDiagonals) {
  let directions = isIncludingDiagonals
    ? ["east", "south", "southEast", "northEast"]
    : ["east", "south"];
  return directions.reduce((acc, direction) => {
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        acc.push({ row: i, col: j, direction: direction });
      }
    }
    return acc;
  }, []);
}

function createGrid(size) {
  let grid = [];

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      j === 0 ? (grid[i] = ["*"]) : (grid[i][j] = "*");
    }
  }

  return grid;
}

function process(answer, word, placements) {
  word = word.replace(/\s+/g, "");
  const directions = directionsSortedByCount(answer.counts);

  // sort placements by preference
  let sortedPlacements = [];

  directions.forEach(direction => {
    const p = placements.filter(p => p.direction === direction);
    sortedPlacements = sortedPlacements.concat(p);
  });

  for (var i = 0; i < sortedPlacements.length; i++) {
    const placement = sortedPlacements[i];
    if (canInsert(answer.grid, word, placement)) {
      const direction = placement.direction;
      const directionCount = answer.counts[direction];

      return {
        grid: insert(answer.grid, word, placement),
        counts: { ...answer.counts, [direction]: directionCount + 1 }
      };
    }
  }
  return false;
}

function directionsSortedByCount(directions) {
  let result = [];

  for (let direction in directions) {
    result.push([direction, directions[direction]]);
  }

  return result
    .sort(function(a, b) {
      return a[1] - b[1];
    })
    .map(e => e[0]);
}

function canInsert(grid, word, placement) {
  let { row, col, direction } = placement;
  const gridSize = Object.keys(grid).length;

  for (var i = 0; i < word.length; i++) {
    if (row < 0 || col < 0 || row >= gridSize || col >= gridSize) {
      return false;
    } else if (grid[row][col] !== "*" && grid[row][col] !== word[i]) {
      return false;
    }

    [row, col] = incrementCoordinates(row, col, direction);
  }

  return true;
}

function insert(grid, word, placement) {
  let { row, col, direction } = placement;

  for (var i = 0; i < word.length; i++) {
    grid[row][col] = word[i];
    [row, col] = incrementCoordinates(row, col, direction);
  }

  return grid;
}

function incrementCoordinates(row, col, direction) {
  if (direction === "east") {
    col += 1;
  } else if (direction === "south") {
    row += 1;
  } else if (direction === "southEast") {
    col += 1;
    row += 1;
  } else if (direction === "northEast") {
    row -= 1;
    col += 1;
  } else {
    console.log(`Incorrect direction: ${direction}`);
    return undefined;
  }

  return [row, col];
}

function fillBlanks(grid) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const gridSize = Object.keys(grid).length;

  for (var i = 0; i < gridSize; i++) {
    for (var j = 0; j < gridSize; j++) {
      if (grid[i][j] === "*") {
        let randomLetter = ALPHABET[Math.floor(Math.random() * 26)];
        grid = update(grid, {
          [i]: { [j]: { $set: randomLetter } }
        });
      }
    }
  }

  return grid;
}

export const createWordSearch = (words, size, isIncludingDiagonals) => {
  const shuffledPlacements = shuffle(placements(size, isIncludingDiagonals));

  const counts = {
    east: 0,
    south: 0,
    southEast: 0,
    northEast: 0
  };

  const answer = words.reduce(
    (ans, word) => {
      if (ans) {
        return process(ans, word, shuffledPlacements);
      } else {
        return ans;
      }
    },
    { grid: createGrid(size), counts: counts }
  );

  if (answer) {
    const puzzle = fillBlanks(answer.grid);
    return { puzzle: puzzle, answer: answer.grid, canCreate: true };
  } else {
    return { canCreate: false };
  }
};
