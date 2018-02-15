import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
`;

class QuizHeader extends Component {
  render() {
    return (
      <header className={styles}>
        <div>
          {`Question: ${this.props.currentQuestionIndex + 1} of ${
            this.props.questionAmount
          }`}
        </div>
        <div>{`Score: ${this.props.score}`}</div>
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
