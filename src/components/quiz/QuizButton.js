import React, { Component } from "react";
import { connect } from "react-redux";
import { css, cx } from "@emotion/css"

import {
  updateCurrentQuestionIndex,
  setShowQuizAnswer,
  updateScore,
  recordAnswerResult
} from "../../actions";

const styles = css`
  font-size: 16px;
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  display: block;
  cursor: pointer;
  width: 145px;
  padding: 10px 0;
  margin: 4px;
  color: #000;
  background: #fff;
  border: solid 4px #bdddf4;
  border-radius: 5px;

  &:hover {
    background: #eef6fc;
  }

  @media (min-width: 420px) {
    width: 200px;
  }
`;

const correctStyles = css`
  background-color: #d9ffbd;
  background-repeat: no-repeat;

  &:hover {
    background-color: #d9ffbd;
    background-repeat: no-repeat;
  }
`;

const incorrectStyles = css`
  background-color: #ffbdd3;
  opacity: 0.25;

  &:hover {
    background-color: #ffbdd3;
  }
`;

class QuizButton extends Component {
  handleUserAnswer() {
    if (this.currentQuestionUnsnswered()) {
      this.showAnswer();
      this.isAnswerCorrect()
        ? this.dispatchCorrect()
        : this.dispatchIncorrect();

      const _this = this;

      setTimeout(function() {
        _this.hideAnswer();
        _this.incrementQuestion();
      }, 2000);
    }
  }

  currentQuestionUnsnswered() {
    return !this.props.questions[this.props.currentQuestionIndex].answerResult;
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
        ? cx(styles, correctStyles)
        : cx(styles, incorrectStyles)
      : styles;
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
  const questions = state.quiz.questions;

  return {
    questions: questions,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    score: state.quiz.score,
    correctAnswer: questions[state.quiz.currentQuestionIndex].vocabulary,
    showQuizAnswer: state.quiz.showQuizAnswer
  };
}

export default connect(mapStateToProps)(QuizButton);
