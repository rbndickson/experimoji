import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  display: inline-block;
  margin: 50px;
  border: 1px solid #eee;
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

class Grid extends Component {
  render() {
    const rows = Object.keys(this.props.data);

    return (
      <div className={styles}>
        {rows.map(row => (
          <div className={rowStyles} key={row}>
            {rows.map(col => (
              <div className={gridSquareStyles} key={col}>
                {this.props.data[row][col]}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
