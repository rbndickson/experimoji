import React, { Component } from "react";
import { connect } from "react-redux";
import "./MemoryGame.css";
import { createArrayOfNumbers, emojiSrc, sleep } from "../../utils/helpers";
import { updateFlashcardStatus, setClickable } from "../../actions";

class MemoryGame extends Component {
  componentDidUpdate() {
    if (this.selectedFlashcards().length === 2) {
      this.isMatch();
    }
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

  async isMatch() {
    const selectedFlashcards = this.selectedFlashcards();

    if (selectedFlashcards[0].emojiCode === selectedFlashcards[1].emojiCode) {
      selectedFlashcards.forEach(flashcard => {
        this.setFlashcardMatched(flashcard.position);
      });
    } else {
      this.props.dispatch(setClickable(false));
      await sleep(2000);
      selectedFlashcards.forEach(flashcard => {
        this.setFlashcardFaceDown(flashcard.position);
      });
      this.props.dispatch(setClickable(true));
    }
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
          <div
            key={flashcard.data}
            className={
              flashcard.status === "matched"
                ? "MemoryGame-flashcard MemoryGame-flashcard-matched"
                : "MemoryGame-flashcard"
            }
            onClick={() => this.handleFlashcardSelection(position)}
          >
            <div className={"MemoryGame-flashcard-content"}>
              {flashcard.status !== "faceDown" &&
                flashcard.flashcardType === "word" &&
                flashcard.data}
              {flashcard.status !== "faceDown" &&
                flashcard.flashcardType === "picture" && (
                  <img src={emojiSrc(flashcard.data)} alt={flashcard.english} />
                )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.memory.flashcards,
    isClickable: state.memory.isClickable
  };
}

export default connect(mapStateToProps)(MemoryGame);
