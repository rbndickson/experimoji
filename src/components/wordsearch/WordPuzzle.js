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

class WordPuzzle extends Component {
  state = {
    puzzle: {},
    answers: {},
    horizontalCount: 0,
    verticalCount: 0
  };

  componentDidMount() {
    this.createWordSearch();
  }

  createWordSearch() {
    const placements = shuffle(this.placements());

    const answer = this.props.words.reduce((acc, word) => {
      return this.process(acc, word, placements);
    }, this.createGrid());

    const puzzle = this.fillBlanks(answer);

    this.setState({ answer: answer, puzzle: puzzle });
  }

  createGrid() {
    let grid = {};

    for (var i = 0; i < this.props.size; i++) {
      grid[i] = {};
      for (var j = 0; j < this.props.size; j++) {
        grid[i][j] = "*";
      }
    }

    return grid;
  }

  placements() {
    return ["horizontal", "vertical"].reduce((acc, direction) => {
      for (var i = 0; i < this.props.size; i++) {
        for (var j = 0; j < this.props.size; j++) {
          acc.push({ row: i, col: j, direction: direction });
        }
      }
      return acc;
    }, []);
  }

  process(grid, word, placements) {
    for (var i = 0; i < placements.length; i++) {
      if (this.canInsert(grid, word, placements[i])) {
        return this.insert(grid, word, placements[i]);
      }
    }

    return false;
  }

  canInsert(grid, word, placement) {
    let { row, col, direction } = placement;

    for (var i = 0; i < word.length; i++) {
      if (row >= this.props.size || col >= grid.length) {
        return false;
      } else if (grid[row][col] !== "*" && grid[row][col] !== word[i]) {
        return false;
      }
      direction === "horizontal" ? (col += 1) : (row += 1);
    }

    return true;
  }

  insert(grid, word, placement) {
    let { row, col, direction } = placement;

    for (var i = 0; i < word.length; i++) {
      grid[row][col] = word[i];
      direction === "horizontal" ? (col += 1) : (row += 1);
    }

    return grid;
  }

  fillBlanks(grid) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < this.props.size; i++) {
      for (var j = 0; j < this.props.size; j++) {
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
    );
  }
}

export default WordPuzzle;
