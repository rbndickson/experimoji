import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";

const styles = css`
  margin: 40px 0;
  font-size: 24px;
`;

function QuizResult({ currentQuestionIndex, score }) {
  return (
    <div
      className={styles}
    >{`You scored ${score} out of ${currentQuestionIndex}`}</div>
  );
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
  };
}

export default connect(mapStateToProps)(QuizResult);
