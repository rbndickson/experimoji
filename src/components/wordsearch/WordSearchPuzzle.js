import React, { Component } from "react";
import { css } from "@emotion/css";
import WordSearchGrid from "./WordSearchGrid";

const errorMessageStyles = css`
  color: red;
  padding: 100px 0;
`;

class WordSearchPuzzle extends Component {
  render() {
    return this.props.view === "create" ? (
      <div>
        {this.props.canCreate ? (
          <div>
            <WordSearchGrid data={this.props.answer} />
            <WordSearchGrid data={this.props.puzzle} />
          </div>
        ) : (
          <p className={errorMessageStyles}>Wordsearch size too small</p>
        )}
      </div>
    ) : (
      <div>
        <WordSearchGrid data={this.props.puzzle} />
        <WordSearchGrid data={this.props.answer} />
      </div>
    );
  }
}

export default WordSearchPuzzle;
