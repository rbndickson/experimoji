import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateQuizScreen,
  updateScore,
  updateCurrentQuestionIndex,
  setQuizFlashcards
} from "../actions";
import QuizSettings from "./QuizSettings";
import QuizGame from "./QuizGame";
import "./Quiz.css";

class Quiz extends Component {
  componentWillMount() {
    this.props.dispatch(updateQuizScreen("settings"));
    this.props.dispatch(updateScore(0));
    this.props.dispatch(updateCurrentQuestionIndex(0));
    this.props.dispatch(setQuizFlashcards(this.props.flashcards));
  }

  render() {
    return (
      <div>
        {this.props.quizScreen === "game" ? <QuizGame /> : <QuizSettings />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizScreen: state.quiz.quizScreen
  };
}

export default connect(mapStateToProps)(Quiz);
