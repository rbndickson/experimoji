import React, { Component } from "react";
import { connect } from "react-redux";

class QuizAnswer extends Component {
  render() {
    return (
      <div className={"quiz-answer"}>
        {this.props.showQuizAnswer && <div>{this.props.flashcard.english}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = state.quiz.flashcards;
  const flashcard = flashcards[state.quiz.currentQuestionIndex];

  return {
    flashcard: flashcards[state.quiz.currentQuestionIndex],
    showQuizAnswer: state.quiz.showQuizAnswer
  };
}

export default connect(mapStateToProps)(QuizAnswer);