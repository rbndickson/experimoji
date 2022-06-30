import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";

const styles = css`
  height: 20px;
  margin: 20px 0 10px 0;
  font-weight: bold;
`;

class QuizAnswer extends Component {
  render() {
    return (
      <div className={styles}>
        {this.props.showQuizAnswer && (
          <div>{this.props.question.vocabulary}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const questions = state.quiz.questions;

  return {
    question: questions[state.quiz.currentQuestionIndex],
    showQuizAnswer: state.quiz.showQuizAnswer,
  };
}

export default connect(mapStateToProps)(QuizAnswer);
