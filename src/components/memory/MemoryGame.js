import React, { Component } from "react";
import { connect } from "react-redux";
import "./memory.css";
import { createArrayOfNumbers, emojiSrc } from "../../utils/helpers";

class MemoryGame extends Component {
  render() {
    const positions = createArrayOfNumbers(8);
    const flashcards = positions.map(position => {
      return this.props.flashcards[position];
    });

    return (
      <div className="memory-flashcards">
        {flashcards.map(flashcard => (
          <div key={flashcard.data} className="memory-flashcard">
            {flashcard.flashcardType === "word" && flashcard.data}
            {flashcard.flashcardType === "picture" && (
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
