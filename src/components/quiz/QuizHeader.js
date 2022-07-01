import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  font-family: "Varela Round", sans-serif;
  font-size: 20px;

  @media (min-width: 480px) {
    font-size: 26px;
  }
`;

function QuizHeader({ currentQuestionIndex, score, questionAmount }) {
  return (
    <header className={styles}>
      <div>{`Question: ${currentQuestionIndex + 1} of ${questionAmount}`}</div>
      <div>{`Score: ${score}`}</div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    questionAmount: state.quiz.questionAmount,
  };
}

export default connect(mapStateToProps)(QuizHeader);
