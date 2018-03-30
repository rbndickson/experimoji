import React, { Component } from "react";
import update from "immutability-helper";
import { css } from "emotion";
import { shuffle } from "../../utils/helpers";

const styles = css`
  margin: 50px;
`;

const rowStyles = css`
  display: block;
`;

const gridSquareStyles = css`
  display: inline-block;
  height: 26px;
  width: 40px;
  border: 1px solid #eee;
  padding: 14px 0 0 0;
  text-align: center;
`;

const errorMessageStyles = css`
  color: red;
  padding: 100px 0;
`;

class WordPuzzle extends Component {
  state = {
    puzzle: {},
    answers: {},
    canCreate: true
  };

  componentDidMount() {
    this.createWordSearch();
  }

  componentWillReceiveProps(nextProps) {
    this.createWordSearch(nextProps);
  }

  createWordSearch(props = this.props) {
    const placements = shuffle(this.placements(props.size));

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

  placements(size) {
    return ["east", "south", "southEast", "northEast"].reduce(
      (acc, direction) => {
        for (var i = 0; i < size; i++) {
          for (var j = 0; j < size; j++) {
            acc.push({ row: i, col: j, direction: direction });
          }
        }
        return acc;
      },
      []
    );
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
    const rows = Object.keys(this.state.puzzle);

    return (
      <div>
        {this.state.canCreate ? (
          <div>
            <div className={styles}>
              {rows.map(row => (
                <div className={rowStyles} key={row}>
                  {rows.map(col => (
                    <div className={gridSquareStyles} key={col}>
                      {this.state.puzzle[row][col]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles}>
              {rows.map(row => (
                <div className={rowStyles} key={row}>
                  {rows.map(col => (
                    <div className={gridSquareStyles} key={col}>
                      {this.state.answer[row][col]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className={errorMessageStyles}>Wordsearch size too small</p>
        )}
      </div>
    );
  }
}

export default WordPuzzle;
