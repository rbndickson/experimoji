import React, { Component } from "react";
import { connect } from "react-redux";
import { sleep } from "../../utils/helpers";
import "./QuizButton.css";

import {
  updateCurrentQuestionIndex,
  setShowQuizAnswer,
  updateScore
} from "../../actions";

class QuizButton extends Component {
  async handleUserAnswer() {
    this.showAnswer();
    if (this.answerCorrect()) {
      this.props.dispatch(updateScore(this.props.score + 1));
    }
    await sleep(2000);
    this.hideAnswer();
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

  answerClass() {
    if (this.props.showQuizAnswer) {
      if (this.props.answer === this.props.correctAnswer) {
        return "QuizButton QuizButton-correct";
      } else {
        return "QuizButton QuizButton-incorrect";
      }
    } else {
      return "QuizButton";
    }
  }

  render() {
    return (
      <button
        className={this.answerClass()}
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
