import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { emojiSrc } from "../../utils/helpers";
import QuizButtons from "./QuizButtons";

const styles = css`
  width: 150px;
  margin: 20px auto;
`;

class QuizQuestion extends Component {
  render() {
    const { question } = this.props;

    return (
      <div className={styles}>
        <img alt={question.vocabulary} src={emojiSrc(question.emojiCode)} />
        <QuizButtons question={question} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const questions = state.quiz.questions;

  return {
    question: questions[state.quiz.currentQuestionIndex]
  };
}

export default connect(mapStateToProps)(QuizQuestion);
