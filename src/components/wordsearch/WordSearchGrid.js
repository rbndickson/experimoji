import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  display: inline-block;
  margin: 50px 0;
  border: 1px solid #eee;

  @media (max-width: 600px) {
    margin 20px 0;
  }
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

  @media (max-width: 700px) {
    height: 14px;
    width: 20px;
    padding: 6px 0 0 0;
    font-size: 10px;
  }
`;

class WordSearchGrid extends Component {
  render() {
    const rows = Object.keys(this.props.data);

    return (
      <div>
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
      </div>
    );
  }
}

export default WordSearchGrid;
