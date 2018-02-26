import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";

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
