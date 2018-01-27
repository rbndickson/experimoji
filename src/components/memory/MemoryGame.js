import React, { Component } from "react";
import { connect } from "react-redux";
import "./memory.css";
import { createArrayOfNumbers, emojiSrc } from "../../utils/helpers";
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
    return Object.values(this.props.flashcards).filter(
      f => f.status === "selected"
    );
  }

  isMatch() {
    const selectedFlashcards = this.selectedFlashcards();
    if (selectedFlashcards[0].emojiCode === selectedFlashcards[1].emojiCode) {
      console.log("yay");
    } else {
      console.log("nay");
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
