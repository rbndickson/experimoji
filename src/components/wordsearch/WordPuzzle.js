import React, { Component } from "react";
import { css } from "emotion";

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
    grid: {},
    horizontalCount: 0,
    verticalCount: 0
  };

  componentDidMount() {
    this.createGrid();
  }

  createGrid() {
    let grid = {};

    for (var i = 0; i < this.props.size; i++) {
      grid[i] = {};
      for (var j = 0; j < this.props.size; j++) {
        grid[i][j] = "*";
      }
    }

    this.setState({ grid: grid });
  }

  render() {
    const rows = Object.keys(this.state.grid);

    return (
      <div className={styles}>
        {rows.map(row => (
          <div className={rowStyles} key={row}>
            {rows.map(col => (
              <div className={gridSquareStyles}>
                {this.state.grid[row][col]}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default WordPuzzle;
