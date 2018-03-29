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
  size: 10
};

class WordSearch extends Component {
  state = initialState;

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.size !== this.state.size || nextState.words !== this.state.words
    );
  }

  addWord(word) {
    let newWords = this.state.words.slice();
    newWords.push(word);
    this.setState({ words: newWords });
  }

  updateSize(size) {
    this.setState({ size: size });
  }

  resetWordSearch() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className={styles}>
        <h1>Word Search</h1>
        <Controls
          size={this.state.size}
          addWord={word => this.addWord(word)}
          updateSize={size => this.updateSize(size)}
          resetWordSearch={() => this.resetWordSearch()}
        />
        <WordList words={this.state.words} />
        <WordPuzzle words={this.state.words} size={this.state.size} />
      </div>
    );
  }
}

export default WordSearch;
