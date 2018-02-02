import React, { Component } from "react";
import { connect } from "react-redux";
import { createArrayOfNumbers, shuffle } from "../../utils/helpers";
import { addFlashcard } from "../../actions";
import MemoryGame from "./MemoryGame";

class Memory extends Component {
  componentWillMount() {
    let positions = shuffle(
      createArrayOfNumbers(this.props.flashcards.length * 2)
    );

    let flashcards = this.props.flashcards.reduce((acc, e) => {
      acc.push({
        position: positions.pop(),
        flashcardType: "word",
        data: e.english,
        emojiCode: e.emojiCode,
        status: "faceDown"
      });
      acc.push({
        position: positions.pop(),
        flashcardType: "picture",
        data: e.emojiCode,
        emojiCode: e.emojiCode,
        status: "faceDown"
      });
      return acc;
    }, []);

    flashcards.forEach(flashcard => {
      this.props.dispatch(addFlashcard(flashcard));
    });
  }

  isFinished() {
    let result = true;
    this.props.memoryGameFlashcards.forEach(f => {
      if (f.status === "faceDown") {
        result = false;
      }
    });
    return result;
  }

  render() {
    return (
      <div>
        <MemoryGame />
        {this.isFinished() && "Game Finished!"}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards).slice(0, 4);
  return {
    flashcards: flashcards,
    memoryGameFlashcards: Object.values(state.memory.flashcards)
  };
}

export default connect(mapStateToProps)(Memory);
