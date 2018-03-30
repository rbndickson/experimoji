import React, { Component } from "react";
import update from "immutability-helper";
import { css } from "emotion";
import { shuffle } from "../../utils/helpers";
import Grid from "./Grid";

const errorMessageStyles = css`
  color: red;
  padding: 100px 0;
`;

class WordPuzzle extends Component {
  state = {
    puzzle: {},
    answer: {},
    canCreate: true
  };

  componentDidMount() {
    this.createWordSearch();
  }

  componentWillReceiveProps(nextProps) {
    this.createWordSearch(nextProps);
  }

  createWordSearch(props = this.props) {
    const placements = shuffle(
      this.placements(props.size, props.isIncludingDiagonals)
    );

    const answer = props.words.reduce((acc, word) => {
      return acc ? this.process(acc, word, placements) : acc;
    }, this.createGrid(props.size));

    if (answer) {
      const puzzle = this.fillBlanks(answer);
      this.setState({ answer: answer, puzzle: puzzle, canCreate: true });
    } else {
      this.setState({ canCreate: false });
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

  process(grid, word, placements) {
    word = word.replace(/\s+/g, "");

    for (var i = 0; i < placements.length; i++) {
      if (this.canInsert(grid, word, placements[i])) {
        return this.insert(grid, word, placements[i]);
      }
    }

    return false;
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

  render() {
    return (
      <div>
        {this.state.canCreate ? (
          <div>
            <Grid data={this.state.answer} />
            <Grid data={this.state.puzzle} />
          </div>
        ) : (
          <p className={errorMessageStyles}>Wordsearch size too small</p>
        )}
      </div>
    );
  }
}

export default WordPuzzle;
