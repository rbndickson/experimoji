import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import QuizResultsItem from "./QuizResultsItem";

const styles = css`
  max-width: 400px;
  margin: 0 auto;
`;

class QuizResultsList extends Component {
  render() {
    return (
      <div className={styles}>
        <h3>Review</h3>
        <h4>Words you answered incorrectly:</h4>
        <ul>
          {this.props.flashcards
            .filter(flashcard => flashcard.answerResult === "incorrect")
            .map(flashcard => (
              <QuizResultsItem
                word={flashcard.english}
                emojiCode={flashcard.emojiCode}
              />
            ))}
        </ul>
        <h4>Words you answered correctly:</h4>
        <ul>
          {this.props.flashcards
            .filter(flashcard => flashcard.answerResult === "correct")
            .map(flashcard => (
              <QuizResultsItem
                word={flashcard.english}
                emojiCode={flashcard.emojiCode}
                key={flashcard.engish}
              />
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.quiz.flashcards)
  };
}

export default connect(mapStateToProps)(QuizResultsList);
