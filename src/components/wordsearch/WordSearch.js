import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  position: relative;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

class WordSearch extends Component {
  render() {
    const words = [
      "black",
      "blue",
      "brown",
      "green",
      "pink",
      "purple",
      "red",
      "yellow"
    ];

    return (
      <div className={styles}>
        <h1>Word Search</h1>
        <WordList words={words} />
      </div>
    );
  }
}

export default WordSearch;
