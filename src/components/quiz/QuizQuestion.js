import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css"
import Emoji from "../Emoji";
import QuizAnswer from "./QuizAnswer";
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
        <Emoji emojiCode={question.emojiCode} altText={question.vocabulary} />
        <QuizAnswer />
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
