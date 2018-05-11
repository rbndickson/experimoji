import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { sleep } from "../../utils/helpers";
import {
  updateFlashcardStatus,
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
    if (this.selectedFlashcards().length === 2) {
      this.props.dispatch(updateMemoryGameScore(this.props.score + 1));
      this.checkForMatch();
    }
  }

  shouldComponentUpdate(nextProps, _) {
    return this.props.flashcards !== nextProps.flashcards;
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
    return Object.values(this.props.flashcards).filter(
      flashcard => flashcard.status === "selected"
    );
  }

  checkForMatch() {
    const selectedFlashcards = this.selectedFlashcards();

    if (selectedFlashcards[0].emojiCode === selectedFlashcards[1].emojiCode) {
      this.updateFlashcardsToMatched();
    } else {
      this.displayAndHide();
    }
  }

  async displayAndHide() {
    this.props.dispatch(setClickable(false));
    await sleep(2000);
    this.selectedFlashcards().forEach(flashcard => {
      this.setFlashcardFaceDown(flashcard.position);
    });
    this.hideCards();
    this.props.dispatch(setClickable(true));
  }

  updateFlashcardsToMatched() {
    this.selectedFlashcards().forEach(flashcard => {
      this.setFlashcardMatched(flashcard.position);
    });
  }

  hideCards() {
    this.selectedFlashcards().forEach(flashcard => {
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
    return (
      <div className={styles}>
        {Object.values(this.props.flashcards).map(flashcard => (
          <Flashcard
            key={flashcard.position}
            flashcard={flashcard}
            onClick={() => this.handleFlashcardSelection(flashcard.position)}
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
