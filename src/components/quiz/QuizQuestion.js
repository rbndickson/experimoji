import React, { Component } from "react";
import { connect } from "react-redux";
import { emojiSrc } from "../../utils/helpers";
import "./QuizQuestion.css";

class QuizQuestion extends Component {
  render() {
    return (
      <div className={"QuizQuestion"}>
        <img
          alt={this.props.flashcard.english}
          src={emojiSrc(this.props.flashcard.emojiCode)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = state.quiz.flashcards;

  return {
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    flashcard: flashcards[state.quiz.currentQuestionIndex]
  };
}

export default connect(mapStateToProps)(QuizQuestion);
