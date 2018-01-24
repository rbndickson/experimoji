import React, { Component } from "react";
import { connect } from "react-redux";
import "./memory.css";
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
        isShown: false
      });
      acc.push({
        position: positions.pop(),
        flashcardType: "picture",
        data: e.emojiCode,
        isShown: false
      });
      return acc;
    }, []);

    flashcards.forEach(flashcard => {
      this.props.dispatch(addFlashcard(flashcard));
    });
  }

  render() {
    return <MemoryGame />;
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards).slice(0, 4);
  return {
    flashcards: flashcards
  };
}

export default connect(mapStateToProps)(Memory);
