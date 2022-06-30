import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";

const styles = css`
  margin: 40px 0;
  font-size: 24px;
`;

class QuizResult extends Component {
  render() {
    return (
      <div
        className={styles}
      >{`You scored ${this.props.score} out of ${this.props.currentQuestionIndex}`}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
  };
}

export default connect(mapStateToProps)(QuizResult);
