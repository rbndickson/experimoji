import React, { Component } from "react";
import { css } from "emotion";
import Grid from "./Grid";

const errorMessageStyles = css`
  color: red;
  padding: 100px 0;
`;

class WordPuzzle extends Component {
  render() {
    return (
      <div>
        {this.props.canCreate ? (
          <div>
            <Grid data={this.props.answer} />
            <Grid data={this.props.puzzle} />
          </div>
        ) : (
          <p className={errorMessageStyles}>Wordsearch size too small</p>
        )}
      </div>
    );
  }
}

export default WordPuzzle;
