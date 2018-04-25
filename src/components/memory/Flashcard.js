import React, { Component } from "react";
import { css, cx } from "emotion";
import Emoji from "../Emoji";
import FlashcardText from "./FlashcardText";

const styles = css`
  display: flex;
  height: 80px;
  width: 160px;
  border: solid 4px skyblue;
  border-radius: 4px;
  margin: 2px;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;

  @media (max-width: 600px) {
    height: 60px;
    width: 100px;
    font-size: 14px;
  }
`;

const faceDownStyles = css`
  background: skyblue;
`;

const matchedStyles = css`
  border-color: lightgreen;
`;

class Flashcard extends Component {
  flashcardStyles() {
    switch (this.props.flashcard.status) {
      case "matched":
        return cx(styles, matchedStyles);
      case "faceDown":
        return cx(styles, faceDownStyles);
      default:
        return styles;
    }
  }

  flashcardFace() {
    const flashcard = this.props.flashcard;

    switch (flashcard.flashcardType) {
      case "vocabulary":
        return <FlashcardText text={flashcard.data} />;
      case "picture":
        return (
          <Emoji
            emojiCode={flashcard.data}
            altText={flashcard.vocabulary}
            styles={{ height: 60 }}
          />
        );
      default:
        return <p>Uh oh</p>;
    }
  }

  render() {
    return (
      <div
        key={this.props.flashcard.data}
        className={this.flashcardStyles()}
        onClick={() => this.props.onClick()}
      >
        {this.props.flashcard.status !== "faceDown" && this.flashcardFace()}
      </div>
    );
  }
}

export default Flashcard;
