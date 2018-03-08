import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { createArrayOfNumbers, shuffle } from "../../utils/helpers";
import { addFlashcard } from "../../actions";
import MemoryGame from "./MemoryGame";
import Button from "../Button";

const wrapperStyles = css`
  max-width: 600px;
  margin: 0 auto;
`;

const mainStyles = css`
  position: relative;
  background-color: #fff;
  max-width: 600px;
  margin: 0 5px;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

class Memory extends Component {
  componentWillMount() {
    this.setFlashcards();
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
      <div className={wrapperStyles}>
        <main className={mainStyles}>
          <MemoryGame />
          {this.isFinished() && (
            <Button
              text={"Play Again"}
              onClick={() => this.setFlashcards()}
              classModifier={"Button-small"}
            />
          )}
        </main>
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
