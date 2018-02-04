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
    if (this.selectedFlashcardPositions().length === 2) {
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

  selectedFlashcardPositions() {
    const flashcards = this.props.flashcards;
    let selectedFlashcardPositions = [];

    for (var position in flashcards) {
      if (flashcards.hasOwnProperty(position)) {
        if (flashcards[position].status === "selected") {
          selectedFlashcardPositions.push(position);
        }
      }
    }
    return selectedFlashcardPositions;
  }

  checkForMatch() {
    const positions = this.selectedFlashcardPositions();
    const flashcard1 = this.props.flashcards[positions[0]];
    const flashcard2 = this.props.flashcards[positions[1]];

    if (flashcard1.emojiCode === flashcard2.emojiCode) {
      this.updateFlashcardsToMatched(positions);
    } else {
      this.displayAndHide(positions);
    }
  }

  async displayAndHide(positions) {
    this.props.dispatch(setClickable(false));
    await sleep(2000);
    positions.forEach(position => {
      this.setFlashcardFaceDown(position);
    });
    this.hideCards(positions);
    this.props.dispatch(setClickable(true));
  }

  updateFlashcardsToMatched(positions) {
    positions.forEach(position => {
      this.setFlashcardMatched(position);
    });
  }

  hideCards(positions) {
    positions.forEach(position => {
      this.setFlashcardFaceDown(position);
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
    return (
      <div className="MemoryGame-flashcards">
        {createArrayOfNumbers(8).map(position => (
          <Flashcard
            key={position}
            flashcard={this.props.flashcards[position]}
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
