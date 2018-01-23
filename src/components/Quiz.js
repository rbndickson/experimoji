import React, { Component } from "react";
import { connect } from "react-redux";
import QuizQuestion from "./QuizQuestion";
import QuizAnswer from "./QuizAnswer";
import "./Quiz.css";

class Quiz extends Component {
  render() {
    return (
      <div>
        <QuizQuestion />
        <QuizAnswer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards),
    questionIndex: state.quiz.questionIndex
  };
}

export default connect(mapStateToProps)(Quiz);
