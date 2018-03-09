import React, { Component } from "react";
import "./Flashcard.css";
import { emojiSrc } from "../../utils/helpers";

class Flashcard extends Component {
  render() {
    const flashcard = this.props.flashcard;

    return (
      <div
        key={flashcard.data}
        className={"Flashcard Flashcard-" + flashcard.status}
        onClick={() => this.props.onClick()}
      >
        {flashcard.status !== "faceDown" &&
          (flashcard.flashcardType === "vocabulary" ? (
            <div className="Flashcard-text">{flashcard.data}</div>
          ) : (
            <img src={emojiSrc(flashcard.data)} alt={flashcard.vocabulary} />
          ))}
      </div>
    );
  }
}

export default Flashcard;
