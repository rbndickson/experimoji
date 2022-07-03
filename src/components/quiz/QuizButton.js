import React from "react";
import { connect } from "react-redux";
import { css, cx } from "@emotion/css";

import {
  quizCurrentQuestionIndexUpdated,
  quizAnswerShown,
  quizScoreUpdated,
  quizAnswerCorrect,
  quizAnswerIncorrect,
} from "../../features/quiz/quizSlice";

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

function QuizButton({
  dispatch,
  answer,
  correctAnswer,
  currentQuestionIndex,
  score,
  showQuizAnswer,
  questions,
}) {
  const handleUserAnswer = () => {
    if (currentQuestionUnsnswered()) {
      showAnswer();
      isAnswerCorrect() ? dispatchCorrect() : dispatchIncorrect();

      setTimeout(function () {
        hideAnswer();
        incrementQuestion();
      }, 2000);
    }
  };

  const currentQuestionUnsnswered = () => {
    return !questions[currentQuestionIndex].answerResult;
  };

  const dispatchCorrect = () => {
    dispatch(quizScoreUpdated(score + 1));
    dispatch(quizAnswerCorrect(currentQuestionIndex));
  };

  const dispatchIncorrect = () => {
    dispatch(quizAnswerIncorrect(currentQuestionIndex));
  };

  const showAnswer = () => {
    dispatch(quizAnswerShown(true));
  };

  const hideAnswer = () => {
    dispatch(quizAnswerShown(false));
  };

  const incrementQuestion = () => {
    dispatch(quizCurrentQuestionIndexUpdated(currentQuestionIndex + 1));
  };

  const isAnswerCorrect = () => {
    return answer === correctAnswer;
  };

  const buttonClass = () => {
    return showQuizAnswer
      ? answer === correctAnswer
        ? cx(styles, correctStyles)
        : cx(styles, incorrectStyles)
      : styles;
  };

  return (
    <button className={buttonClass()} onClick={() => handleUserAnswer()}>
      {answer}
    </button>
  );
}

function mapStateToProps(state) {
  const questions = state.quiz.questions;

  return {
    questions: questions,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    score: state.quiz.score,
    correctAnswer: questions[state.quiz.currentQuestionIndex].vocabulary,
    showQuizAnswer: state.quiz.showQuizAnswer,
  };
}

export default connect(mapStateToProps)(QuizButton);
