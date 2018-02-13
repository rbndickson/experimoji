import React, { Component } from "react";
import { connect } from "react-redux";
import { sleep } from "../../utils/helpers";
import "./QuizButton.css";

import {
  updateCurrentQuestionIndex,
  setShowQuizAnswer,
  updateScore,
  recordAnswerResult
} from "../../actions";

class QuizButton extends Component {
  async handleUserAnswer() {
    this.showAnswer();
    this.isAnswerCorrect() ? this.dispatchCorrect() : this.dispatchIncorrect();
    await sleep(2000);
    this.hideAnswer();
    this.incrementQuestion();
  }

  dispatchCorrect() {
    const { currentQuestionIndex, score } = this.props;
    this.props.dispatch(updateScore(score + 1));
    this.props.dispatch(recordAnswerResult(currentQuestionIndex, "correct"));
  }

  dispatchIncorrect() {
    const { currentQuestionIndex } = this.props;
    this.props.dispatch(recordAnswerResult(currentQuestionIndex, "incorrect"));
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

  isAnswerCorrect() {
    return this.props.answer === this.props.correctAnswer;
  }

  buttonClass() {
    return this.props.showQuizAnswer
      ? this.props.answer === this.props.correctAnswer
        ? "QuizButton QuizButton-correct"
        : "QuizButton QuizButton-incorrect"
      : "QuizButton";
  }

  render() {
    return (
      <button
        className={this.buttonClass()}
        onClick={() => this.handleUserAnswer()}
      >
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
    correctAnswer: flashcards[state.quiz.currentQuestionIndex].english,
    showQuizAnswer: state.quiz.showQuizAnswer
  };
}

export default connect(mapStateToProps)(QuizButton);
