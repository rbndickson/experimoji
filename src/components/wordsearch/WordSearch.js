import React, { Component } from "react";
import { css } from "emotion";
import update from "immutability-helper";
import { shuffle } from "../../utils/helpers";
import Controls from "./Controls";
import WordList from "./WordList";
import WordPuzzle from "./WordPuzzle";

const styles = css`
  position: relative;
  background-color: #fff;
  min-width: 360px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

const initialState = {
  words: ["black", "blue", "brown", "green", "pink", "purple", "red", "yellow"],
  size: 10,
  isIncludingDiagonals: false,
  view: "create"
};

class WordSearch extends Component {
  state = Object.assign(
    initialState,
    this.createWordSearch(
      initialState.words,
      initialState.size,
      initialState.isIncludingDiagonals
    )
  );

  addWord(word) {
    let words = this.state.words.slice();
    words.push(word);
    this.updateWords(words);
  }

  removeWord(word) {
    let words = this.state.words.filter(e => e !== word);
    this.updateWords(words);
  }

  updateWords(words) {
    const newState = Object.assign(
      this.createWordSearch(
        words,
        this.state.size,
        this.state.isIncludingDiagonals
      ),
      { words }
    );
    this.setState(newState);
  }

  updateSize(size) {
    const newState = Object.assign(
      this.createWordSearch(
        this.state.words,
        size,
        this.state.isIncludingDiagonals
      ),
      { size }
    );
    this.setState(newState);
  }

  updateIsIncludingDiagonals(isIncludingDiagonals) {
    const newState = Object.assign(
      this.createWordSearch(
        this.state.words,
        this.state.size,
        isIncludingDiagonals
      ),
      { isIncludingDiagonals }
    );
    this.setState(newState);
  }

  resetWordSearch() {
    this.setState(initialState);
  }

  clearWordSearch() {
    this.setState({ words: [], puzzle: {}, answer: {} });
  }

  createWordSearch(words, size, isIncludingDiagonals) {
    const placements = shuffle(this.placements(size, isIncludingDiagonals));

    const counts = {
      east: 0,
      south: 0,
      southEast: 0,
      northEast: 0
    };

    const answer = words.reduce(
      (ans, word) => {
        if (ans) {
          return this.process(ans, word, placements);
        } else {
          return ans;
        }
      },
      { grid: this.createGrid(size), counts: counts }
    );

    if (answer) {
      const puzzle = this.fillBlanks(answer.grid);
      return { puzzle: puzzle, answer: answer.grid, canCreate: true };
    } else {
      return { canCreate: false };
    }
  }

  createGrid(size) {
    let grid = {};

    for (var i = 0; i < size; i++) {
      grid[i] = {};
      for (var j = 0; j < size; j++) {
        grid[i][j] = "*";
      }
    }

    return grid;
  }

  placements(size, isIncludingDiagonals) {
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

  process(answer, word, placements) {
    word = word.replace(/\s+/g, "");
    const directions = this.directionsSortedByCount(answer.counts);

    // sort placements by preference
    let sortedPlacements = [];

    directions.forEach(direction => {
      const p = placements.filter(p => p.direction === direction);
      sortedPlacements = sortedPlacements.concat(p);
    });

    for (var i = 0; i < sortedPlacements.length; i++) {
      const placement = sortedPlacements[i];
      if (this.canInsert(answer.grid, word, placement)) {
        const direction = placement.direction;
        const directionCount = answer.counts[direction];

        return {
          grid: this.insert(answer.grid, word, placement),
          counts: { ...answer.counts, [direction]: directionCount + 1 }
        };
      }
    }
    return false;
  }

  directionsSortedByCount(directions) {
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

  canInsert(grid, word, placement) {
    let { row, col, direction } = placement;
    const gridSize = Object.keys(grid).length;

    for (var i = 0; i < word.length; i++) {
      if (row < 0 || col < 0 || row >= gridSize || col >= gridSize) {
        return false;
      } else if (grid[row][col] !== "*" && grid[row][col] !== word[i]) {
        return false;
      }

      [row, col] = this.incrementCoordinates(row, col, direction);
    }

    return true;
  }

  insert(grid, word, placement) {
    let { row, col, direction } = placement;

    for (var i = 0; i < word.length; i++) {
      grid[row][col] = word[i];
      [row, col] = this.incrementCoordinates(row, col, direction);
    }

    return grid;
  }

  incrementCoordinates(row, col, direction) {
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

  fillBlanks(grid) {
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

  updateView(view) {
    this.setState({ view: view });
  }

  render() {
    return (
      <div className={styles}>
        <h1 class={"non-print"}>Word Search Generator</h1>
        <Controls
          size={this.state.size}
          isIncludingDiagonals={this.state.isIncludingDiagonals}
          view={this.state.view}
          addWord={word => this.addWord(word)}
          updateSize={size => this.updateSize(size)}
          updateIsIncludingDiagonals={isIncludingDiagonals =>
            this.updateIsIncludingDiagonals(isIncludingDiagonals)
          }
          resetWordSearch={() => this.resetWordSearch()}
          clearWordSearch={() => this.clearWordSearch()}
          showPrintView={() => this.updateView("print")}
          showCreateView={() => this.updateView("create")}
        />
        <WordList
          words={this.state.words}
          removeWord={word => this.removeWord(word)}
        />
        <WordPuzzle
          answer={this.state.answer}
          puzzle={this.state.puzzle}
          canCreate={this.state.canCreate}
          view={this.state.view}
        />
      </div>
    );
  }
}

export default WordSearch;
