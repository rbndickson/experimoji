import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";

const styles = css`
  height: 20px;
  margin: 20px 0 10px 0;
  font-weight: bold;
`;

function QuizAnswer({ showQuizAnswer, question }) {
  return (
    <div className={styles}>
      {showQuizAnswer && <div>{question.vocabulary}</div>}
    </div>
  );
}

function mapStateToProps(state) {
  const questions = state.quiz.questions;

  return {
    question: questions[state.quiz.currentQuestionIndex],
    showQuizAnswer: state.quiz.showQuizAnswer,
  };
}

export default connect(mapStateToProps)(QuizAnswer);
