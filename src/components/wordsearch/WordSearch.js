import React, { Component } from "react";
import { css } from "emotion";
import Controls from "./Controls";
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

const initialState = {
  words: ["black", "blue", "brown", "green", "pink", "purple", "red", "yellow"],
  size: 10,
  isIncludingDiagonals: false
};

class WordSearch extends Component {
  state = initialState;

  addWord(word) {
    let newWords = this.state.words.slice();
    newWords.push(word);
    this.setState({ words: newWords });
  }

  removeWord(word) {
    let newWords = this.state.words.filter(e => e !== word);
    this.setState({ words: newWords });
  }

  updateSize(size) {
    this.setState({ size: size });
  }

  updateIsIncludingDiagonals(isIncludingDiagonals) {
    console.log(isIncludingDiagonals);

    this.setState({ isIncludingDiagonals: isIncludingDiagonals });
  }

  resetWordSearch() {
    this.setState(initialState);
  }

  clearWordSearch() {
    this.setState({ words: [] });
  }

  render() {
    return (
      <div className={styles}>
        <h1>Word Search</h1>
        <Controls
          size={this.state.size}
          isIncludingDiagonals={this.state.isIncludingDiagonals}
          addWord={word => this.addWord(word)}
          updateSize={size => this.updateSize(size)}
          updateIsIncludingDiagonals={isIncludingDiagonals =>
            this.updateIsIncludingDiagonals(isIncludingDiagonals)
          }
          resetWordSearch={() => this.resetWordSearch()}
          clearWordSearch={() => this.clearWordSearch()}
        />
        <WordList
          words={this.state.words}
          removeWord={word => this.removeWord(word)}
        />
        <WordPuzzle
          words={this.state.words}
          size={this.state.size}
          isIncludingDiagonals={this.state.isIncludingDiagonals}
        />
      </div>
    );
  }
}

export default WordSearch;
