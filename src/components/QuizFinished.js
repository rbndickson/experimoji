import React, { Component } from "react";
import { connect } from "react-redux";

class QuizFinished extends Component {
  render() {
    return (
      <div>
        <h2>Quiz complete!</h2>
        <p>{`You scored ${this.props.score} out of ${
          this.props.currentQuestionIndex
        }.`}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizFinished);
