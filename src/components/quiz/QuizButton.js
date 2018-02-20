import React, { Component } from "react";
import { connect } from "react-redux";
import { sleep } from "../../utils/helpers";
import { css, cx } from "emotion";

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
  width: 150px;
  padding: 10px;
  margin: 4px;
  color: #000;
  background: #fff;
  border: solid 4px #bdddf4;
  border-radius: 5px;

  &:hover {
    background: #eef6fc;
  }
`;

const correctStyles = css`
  background-color: #a6d388;

  &:hover {
    background-color: #a6d388;
  }
`;

const incorrectStyles = css`
  background-color: #ea596e;

  &:hover {
    background-color: #ea596e;
  }
`;

class QuizButton extends Component {
  handleUserAnswer() {
    this.showAnswer();
    this.isAnswerCorrect() ? this.dispatchCorrect() : this.dispatchIncorrect();

    const _this = this;

    setTimeout(function() {
      _this.hideAnswer();
      _this.incrementQuestion();
    }, 2000);
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
  const flashcards = state.quiz.flashcards;

  return {
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    score: state.quiz.score,
    correctAnswer: flashcards[state.quiz.currentQuestionIndex].english,
    showQuizAnswer: state.quiz.showQuizAnswer
  };
}

export default connect(mapStateToProps)(QuizButton);
