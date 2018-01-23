import React, { Component } from "react";
import { connect } from "react-redux";

class QuizHeader extends Component {
  render() {
    return (
      <header>
        <div className={"score"}>
          {this.props.score}/{this.props.currentQuestionIndex}
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizHeader);
