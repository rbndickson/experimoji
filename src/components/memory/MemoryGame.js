import React, { Component } from "react";
import { connect } from "react-redux";
import "./MemoryGame.css";
import { createArrayOfNumbers, sleep } from "../../utils/helpers";
import {
  updateFlashcardStatus,
  setClickable,
  updateMemoryGameScore
} from "../../actions";
import Flashcard from "./Flashcard";

class MemoryGame extends Component {
  componentDidUpdate() {
    if (this.selectedFlashcards().length === 2) {
      this.props.dispatch(updateMemoryGameScore(this.props.score + 1));
      this.checkForMatch();
    }
  }

  shouldComponentUpdate(prevState) {
    return this.props.flashcards !== prevState.flashcards;
  }

  handleFlashcardSelection(position) {
    if (this.props.isClickable) {
      this.props.dispatch(
        updateFlashcardStatus({
          position: position,
          status: "selected"
        })
      );
    }
  }

  selectedFlashcards() {
    const flashcards = this.props.flashcards;
    let selectedFlashcards = [];

    for (var flashcard in flashcards) {
      if (flashcards.hasOwnProperty(flashcard)) {
        if (flashcards[flashcard].status === "selected") {
          selectedFlashcards.push({
            position: flashcard,
            emojiCode: flashcards[flashcard].emojiCode
          });
        }
      }
    }
    return selectedFlashcards;
  }

  checkForMatch() {
    const selectedFlashcards = this.selectedFlashcards();

    if (selectedFlashcards[0].emojiCode === selectedFlashcards[1].emojiCode) {
      this.updateFlashcardsToMatched(selectedFlashcards);
    } else {
      this.displayAndHide(selectedFlashcards);
    }
  }

  async displayAndHide(flashcards) {
    this.props.dispatch(setClickable(false));
    await sleep(2000);
    flashcards.forEach(flashcard => {
      this.setFlashcardFaceDown(flashcard.position);
    });
    this.hideCards(flashcards);
    this.props.dispatch(setClickable(true));
  }

  updateFlashcardsToMatched(flashcards) {
    flashcards.forEach(flashcard => {
      this.setFlashcardMatched(flashcard.position);
    });
  }

  hideCards(flashcards) {
    flashcards.forEach(flashcard => {
      this.setFlashcardFaceDown(flashcard.position);
    });
  }

  setFlashcardFaceDown(position) {
    this.props.dispatch(
      updateFlashcardStatus({
        position: position,
        status: "faceDown"
      })
    );
  }

  setFlashcardMatched(position) {
    this.props.dispatch(
      updateFlashcardStatus({
        position: position,
        status: "matched"
      })
    );
  }

  render() {
    const positions = createArrayOfNumbers(8);
    const flashcards = positions.map(position => {
      return this.props.flashcards[position];
    });

    return (
      <div className="MemoryGame-flashcards">
        {flashcards.map((flashcard, position) => (
          <Flashcard
            key={position}
            flashcard={flashcard}
            onClick={() => this.handleFlashcardSelection(position)}
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
