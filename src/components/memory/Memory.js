import React, { Component } from "react";
import { connect } from "react-redux";
import { createArrayOfNumbers, shuffle } from "../../utils/helpers";
import Title from "../Title";
import Button from "../Button";
import MemoryGame from "./MemoryGame";

import { memoryGameFlashcardsAdded } from "../../features/memory_game/memoryGameSlice";

class Memory extends Component {
  componentDidMount() {
    this.setFlashcards();
  }

  setFlashcards() {
    let positions = shuffle(
      createArrayOfNumbers(this.props.flashcards.length * 2)
    );

    this.props.flashcards
      .reduce((acc, e) => {
        acc.push({
          position: positions.pop(),
          flashcardType: "vocabulary",
          vocabulary: e.vocabulary,
          emojiCode: e.emojiCode,
        });
        acc.push({
          position: positions.pop(),
          flashcardType: "picture",
          vocabulary: e.vocabulary,
          emojiCode: e.emojiCode,
        });
        return acc;
      }, [])
      .forEach((flashcard) => {
        this.props.dispatch(memoryGameFlashcardsAdded(flashcard));
      });
  }

  isGameFinished() {
    return this.props.memoryGameFlashcards.every((f) => f.isMatched);
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
  const flashcards = state.flashcards.slice(0, 4);

  return {
    // TODO: Use data
    category: "Nature",
    language: "German",
    flashcards: flashcards,
    memoryGameFlashcards: Object.values(state.memoryGame.flashcards),
  };
}

export default connect(mapStateToProps)(Memory);
