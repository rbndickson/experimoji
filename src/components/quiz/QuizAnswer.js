import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuizAnswer.css";

class QuizAnswer extends Component {
  render() {
    return (
      <div className={"QuizAnswer"}>
        {this.props.showQuizAnswer && <div>{this.props.flashcard.english}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = state.quiz.flashcards;

  return {
    flashcard: flashcards[state.quiz.currentQuestionIndex],
    showQuizAnswer: state.quiz.showQuizAnswer
  };
}

export default connect(mapStateToProps)(QuizAnswer);
