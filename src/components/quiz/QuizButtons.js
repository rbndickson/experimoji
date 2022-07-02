import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";
import QuizButton from "./QuizButton";

const styles = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const colStyles = css`
  flex: 1;
`;

function QuizButtons({ level, question }) {
  const createAnswers = () => {
    let incorrectAnswers = question.incorrectAnswers;

    if (level === "easy") {
      incorrectAnswers = incorrectAnswers.slice(0, 2);
    }

    let answerPool = incorrectAnswers.concat(question.vocabulary);
    return answerPool.sort();
  };

  const answers = createAnswers();

  return level === "easy" ? (
    <div className={styles}>
      <div className={colStyles}>
        {answers.map((e) => (
          <QuizButton key={e} answer={e} />
        ))}
      </div>
    </div>
  ) : (
    <div className={styles}>
      <div className={colStyles}>
        {answers.splice(0, 3).map((e) => (
          <QuizButton key={e} answer={e} />
        ))}
      </div>
      <div className={colStyles}>
        {answers.splice(0, 3).map((e) => (
          <QuizButton key={e} answer={e} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    level: state.quiz.level,
  };
}

export default connect(mapStateToProps)(QuizButtons);
