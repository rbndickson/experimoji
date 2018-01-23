import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import { shuffle } from "../utils/helpers";
import "./Quiz.css";

class Quiz extends Component {
  render() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards),
    questionIndex: state.quiz.questionIndex
  };
}

export default connect(mapStateToProps)(Quiz);
