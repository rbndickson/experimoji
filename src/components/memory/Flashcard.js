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
        <div className={"Flashcard-content"}>
          {flashcard.status !== "faceDown" &&
            (flashcard.flashcardType === "word" ? (
              <p>{flashcard.data}</p>
            ) : (
              <img src={emojiSrc(flashcard.data)} alt={flashcard.english} />
            ))}
        </div>
      </div>
    );
  }
}

export default Flashcard;
