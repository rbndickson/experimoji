import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuizHeader.css";

class QuizHeader extends Component {
  render() {
    return (
      <header className={"QuizHeader"}>
        <div className={"QuizHeader-quizNumber"}>
          {`Question: ${this.props.currentQuestionIndex + 1} of ${
            this.props.questionAmount
          }`}
        </div>
        <div className={"QuizHeader-score"}>{`Score: ${this.props.score}`}</div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    questionAmount: state.quiz.questionAmount
  };
}

export default connect(mapStateToProps)(QuizHeader);
