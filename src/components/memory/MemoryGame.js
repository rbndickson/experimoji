import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css"
import { sleep } from "../../utils/helpers";
import {
  selectFlashcard,
  deselectFlashcard,
  setFlashcardToMatched,
  setClickable,
  updateMemoryGameScore
} from "../../actions";
import Flashcard from "./Flashcard";

const styles = css`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 400px;
  margin: 10px auto 0 auto;
`;

class MemoryGame extends Component {
  componentDidUpdate() {
    const selectedFlashcards = this.selectedFlashcards();

    if (selectedFlashcards.length === 2) {
      this.props.dispatch(updateMemoryGameScore(this.props.score + 1));
      this.checkForMatch(selectedFlashcards);
    }
  }

  shouldComponentUpdate(nextProps, _) {
    return this.props.flashcards !== nextProps.flashcards;
  }

  handleFlashcardSelection(flashcard) {
    if (this.props.isClickable) {
      this.props.dispatch(selectFlashcard({ flashcard }));
    }
  }

  selectedFlashcards() {
    return Object.values(this.props.flashcards).filter(
      flashcard => flashcard.isSelected
    );
  }

  checkForMatch(flashcards) {
    if (flashcards[0].emojiCode === flashcards[1].emojiCode) {
      this.updateFlashcardsToMatched(flashcards);
    } else {
      this.displayAndHide(flashcards);
    }
  }

  async displayAndHide(flashcards) {
    this.props.dispatch(setClickable(false));

    await sleep(2000);

    flashcards.forEach(flashcard => {
      this.props.dispatch(deselectFlashcard({ flashcard }));
    });

    this.props.dispatch(setClickable(true));
  }

  updateFlashcardsToMatched(flashcards) {
    flashcards.forEach(flashcard => {
      this.props.dispatch(deselectFlashcard({ flashcard }));
      this.props.dispatch(setFlashcardToMatched({ flashcard }));
    });
  }

  render() {
    return (
      <div className={styles}>
        {Object.values(this.props.flashcards).map(flashcard => (
          <Flashcard
            key={flashcard.position}
            flashcard={flashcard}
            onClick={() => this.handleFlashcardSelection(flashcard)}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.memory.flashcards,
    isClickable: state.memory.isClickable,
    score: state.memory.score
  };
}

export default connect(mapStateToProps)(MemoryGame);
