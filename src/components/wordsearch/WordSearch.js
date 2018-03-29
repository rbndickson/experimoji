import React, { Component } from "react";
import { css } from "emotion";
import WordList from "./WordList";
import WordPuzzle from "./WordPuzzle";

const styles = css`
  position: relative;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

const controlsStyles = css`
  margin: 20px 0;
`;

class WordSearch extends Component {
  state = {
    size: 10
  };

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
        <div className={controlsStyles}>
          <p>Size: {this.state.size}</p>
          <input
            type="range"
            value={this.state.size}
            min="5"
            max="16"
            onChange={e => {
              this.setState({ size: e.target.value });
            }}
          />
        </div>
        <WordList words={words} />
        <WordPuzzle words={words} size={this.state.size} />
      </div>
    );
  }
}

export default WordSearch;
