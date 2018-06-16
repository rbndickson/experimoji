import React, { Component } from "react";
import { createWordSearch } from "../../utils/wordsearch";
import Title from "../Title";
import WordSearchControls from "./WordSearchControls";
import WordList from "../WordList";
import WordSearchPuzzle from "./WordSearchPuzzle";

const initialState = {
  title: "Colors",
  words: ["black", "blue", "brown", "green", "pink", "purple", "red", "yellow"],
  size: 10,
  isIncludingDiagonals: false,
  view: "create"
};

class WordSearch extends Component {
  state = Object.assign(
    initialState,
    createWordSearch(
      initialState.words,
      initialState.size,
      initialState.isIncludingDiagonals
    )
  );

  addWord(word) {
    let words = this.state.words.slice();

    if (!words.includes(word)) {
      words.push(word);
      this.updateWords(words);
    }
  }

  removeWord(word) {
    let words = this.state.words.filter(e => e !== word);
    this.updateWords(words);
  }

  updateWords(words) {
    const newState = Object.assign(
      createWordSearch(words, this.state.size, this.state.isIncludingDiagonals),
      { words }
    );
    this.setState(newState);
  }

  updateTitle(title) {
    this.setState({ title: title });
  }

  updateSize(size) {
    const newState = Object.assign(
      createWordSearch(this.state.words, size, this.state.isIncludingDiagonals),
      { size }
    );
    this.setState(newState);
  }

  updateIsIncludingDiagonals(isIncludingDiagonals) {
    const newState = Object.assign(
      createWordSearch(this.state.words, this.state.size, isIncludingDiagonals),
      { isIncludingDiagonals }
    );
    this.setState(newState);
  }

  resetWordSearch() {
    this.setState(initialState);
  }

  clearWordSearch() {
    this.setState({ title: "", words: [], puzzle: {}, answer: {} });
  }

  updateView(view) {
    this.setState({ view: view });
  }

  render() {
    return (
      <div>
        <div className={"non-print"}>
          <Title text={"Word Search Generator"} />
        </div>
        <WordSearchControls
          size={this.state.size}
          isIncludingDiagonals={this.state.isIncludingDiagonals}
          view={this.state.view}
          updateTitle={title => this.updateTitle(title)}
          addWord={word => this.addWord(word)}
          updateSize={size => this.updateSize(size)}
          updateIsIncludingDiagonals={isIncludingDiagonals =>
            this.updateIsIncludingDiagonals(isIncludingDiagonals)
          }
          resetWordSearch={() => this.resetWordSearch()}
          clearWordSearch={() => this.clearWordSearch()}
          showPrintView={() => this.updateView("print")}
          showCreateView={() => this.updateView("create")}
        />
        <h2>{this.state.title}</h2>
        <WordList
          words={this.state.words}
          onClick={word => this.removeWord(word)}
        />
        <WordSearchPuzzle
          answer={this.state.answer}
          puzzle={this.state.puzzle}
          canCreate={this.state.canCreate}
          view={this.state.view}
        />
      </div>
    );
  }
}

export default WordSearch;
