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

const unselectedStyles = css`
  background: skyblue;
`;

const matchedStyles = css`
  border-color: lightgreen;
`;

class Flashcard extends Component {
  flashcardStyles() {
    if (this.props.flashcard.isMatched) {
      return cx(styles, matchedStyles);
    } else if (this.props.flashcard.isSelected) {
      return styles;
    } else {
      return cx(styles, unselectedStyles);
    }
  }

  flashcardFace() {
    const flashcard = this.props.flashcard;

    switch (flashcard.flashcardType) {
      case "vocabulary":
        return <FlashcardText text={flashcard.vocabulary} />;
      case "picture":
        return (
          <Emoji
            emojiCode={flashcard.emojiCode}
            altText={flashcard.vocabulary}
            styles={{ height: 60 }}
          />
        );
      default:
        return <p>Uh oh</p>;
    }
  }

  render() {
    const flashcard = this.props.flashcard;

    return (
      <div
        key={flashcard.position}
        className={this.flashcardStyles()}
        onClick={() => this.props.onClick()}
      >
        {(flashcard.isSelected || flashcard.isMatched) && this.flashcardFace()}
      </div>
    );
  }
}

export default Flashcard;
