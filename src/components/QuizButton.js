import React, { Component } from "react";
import { connect } from "react-redux";
import { sleep } from "../utils/helpers";

import { updateCurrentQuestionIndex, setShowQuizAnswer } from "../actions";

class QuizQuestion extends Component {
  async handleUserAnswer() {
    this.showAnswer();
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

  render() {
    return (
      <button onClick={() => this.handleUserAnswer()}>
        {this.props.answer}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizQuestion);
