import React, { Component } from "react";
import { connect } from "react-redux";
import { sleep } from "../../utils/helpers";

import {
  updateCurrentQuestionIndex,
  setShowQuizAnswer,
  updateScore
} from "../../actions";

class QuizQuestion extends Component {
  async handleUserAnswer() {
    this.showAnswer();
    await sleep(2000);
    this.hideAnswer();
    if (this.answerCorrect()) {
      this.props.dispatch(updateScore(this.props.score + 1));
    }
    this.incrementQuestion();
  }

  showAnswer() {
    this.props.dispatch(setShowQuizAnswer(true));
  }

  hideAnswer() {
    this.props.dispatch(setShowQuizAnswer(false));
  }

  incrementQuestion() {
    this.props.dispatch(
      updateCurrentQuestionIndex(this.props.currentQuestionIndex + 1)
    );
  }

  answerCorrect() {
    return this.props.answer === this.props.correctAnswer;
  }

  render() {
    return (
      <button className="quiz-button" onClick={() => this.handleUserAnswer()}>
        {this.props.answer}
      </button>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = state.quiz.flashcards;

  return {
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    score: state.quiz.score,
    correctAnswer: flashcards[state.quiz.currentQuestionIndex].english
  };
}

export default connect(mapStateToProps)(QuizQuestion);