import React, { Component } from "react";
import { connect } from "react-redux";
import "./memory.css";
import { createArrayOfNumbers, emojiSrc, sleep } from "../../utils/helpers";
import { updateFlashcardStatus } from "../../actions";

class MemoryGame extends Component {
  componentDidUpdate() {
    if (this.selectedFlashcards().length === 2) {
      this.isMatch();
    }
  }

  handleFlashcardSelection(position) {
    this.props.dispatch(
      updateFlashcardStatus({
        position: position,
        status: "selected"
      })
    );
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
        this.props.dispatch(
          updateFlashcardStatus({
            position: flashcard.position,
            status: "matched"
          })
        );
      });
    } else {
      await sleep(2000);
      selectedFlashcards.forEach(flashcard => {
        this.props.dispatch(
          updateFlashcardStatus({
            position: flashcard.position,
            status: "faceDown"
          })
        );
      });
    }
  }

  render() {
    const positions = createArrayOfNumbers(8);
    const flashcards = positions.map(position => {
      return this.props.flashcards[position];
    });

    return (
      <div className="memory-flashcards">
        {flashcards.map((flashcard, position) => (
          <div
            key={flashcard.data}
            className="memory-flashcard"
            onClick={() => this.handleFlashcardSelection(position)}
          >
            {flashcard.status !== "faceDown" &&
              flashcard.flashcardType === "word" &&
              flashcard.data}
            {flashcard.status !== "faceDown" &&
              flashcard.flashcardType === "picture" && (
                <img src={emojiSrc(flashcard.data)} />
              )}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.memory.flashcards
  };
}

export default connect(mapStateToProps)(MemoryGame);
