import React, { Component } from "react";
import { css, cx } from "emotion";
import Emoji from "../Emoji";

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

  img {
    height: 85%;
  }

  .Flashcard-text {
    margin: 0 10px;
  }

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
  render() {
    const flashcard = this.props.flashcard;

    return (
      <div
        key={flashcard.data}
        className={
          flashcard.status === "matched"
            ? cx(styles, matchedStyles)
            : flashcard.status === "faceDown"
              ? cx(styles, faceDownStyles)
              : styles
        }
        onClick={() => this.props.onClick()}
      >
        {flashcard.status !== "faceDown" &&
          (flashcard.flashcardType === "vocabulary" ? (
            <div className="Flashcard-text">{flashcard.data}</div>
          ) : (
            <Emoji emojiCode={flashcard.data} altText={flashcard.vocabulary} />
          ))}
      </div>
    );
  }
}

export default Flashcard;
