import React, { Component } from "react";
import { connect } from "react-redux";
import { createArrayOfNumbers, shuffle } from "../../utils/helpers";
import { addFlashcard } from "../../actions";
import Title from "../Title";
import Button from "../Button";
import MemoryGame from "./MemoryGame";

class Memory extends Component {
  componentDidMount() {
    this.setFlashcards();
  }

  shouldComponentUpdate() {
    return this.isGameFinished();
  }

  setFlashcards() {
    let positions = shuffle(
      createArrayOfNumbers(this.props.flashcards.length * 2)
    );

    let flashcards = this.props.flashcards.reduce((acc, e) => {
      acc.push({
        position: positions.pop(),
        flashcardType: "vocabulary",
        data: e.vocabulary,
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

  isGameFinished() {
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
        <Title
          text={`${this.props.language} ${this.props.category} Memory Game`}
        />
        <MemoryGame />
        {this.isGameFinished() && (
          <Button
            text={"Play Again"}
            onClick={() => this.setFlashcards()}
            classModifier={"Button-small"}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards).slice(0, 4);

  return {
    category: state.worksheet.category,
    language: state.worksheet.language,
    flashcards: flashcards,
    memoryGameFlashcards: Object.values(state.memory.flashcards)
  };
}

export default connect(mapStateToProps)(Memory);
