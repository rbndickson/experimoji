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
        {this.props.score < this.props.currentQuestionIndex && (
          <div>
            <h4>Words you answered incorrectly:</h4>
            <ul>
              {this.props.flashcards
                .filter(flashcard => flashcard.answerResult === "incorrect")
                .map(flashcard => (
                  <QuizResultsItem
                    vocabulary={flashcard.vocabulary}
                    emojiCode={flashcard.emojiCode}
                    key={`${flashcard.vocabulary}${flashcard.emojiCode}`}
                  />
                ))}
            </ul>
          </div>
        )}
        {this.props.score > 0 && (
          <div>
            <h4>Words you answered correctly:</h4>
            <ul>
              {this.props.flashcards
                .filter(flashcard => flashcard.answerResult === "correct")
                .map(flashcard => (
                  <QuizResultsItem
                    vocabulary={flashcard.vocabulary}
                    emojiCode={flashcard.emojiCode}
                    key={`${flashcard.vocabulary}${flashcard.emojiCode}`}
                  />
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.quiz.flashcards),
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizResultsList);
