import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateQuizScreen,
  updateScore,
  updateCurrentQuestionIndex,
  setQuizFlashcards
} from "../../actions";
import QuizSettings from "./QuizSettings";
import QuizGame from "./QuizGame";
import QuizFinished from "./QuizFinished";

class Quiz extends Component {
  componentWillMount() {
    this.props.dispatch(updateQuizScreen("settings"));
    this.props.dispatch(updateScore(0));
    this.props.dispatch(updateCurrentQuestionIndex(0));
    this.props.dispatch(setQuizFlashcards(this.props.flashcards));
  }

  componentDidUpdate() {
    if (
      this.props.quizScreen === "game" &&
      this.props.currentQuestionIndex > this.props.questionAmount - 1
    ) {
      this.props.dispatch(updateQuizScreen("finished"));
    }
  }

  render() {
    return (
      <div>
        {this.props.quizScreen === "finished" && <QuizFinished />}
        {this.props.quizScreen === "settings" && <QuizSettings />}
        {this.props.quizScreen === "game" && <QuizGame />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizScreen: state.quiz.quizScreen,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    questionAmount: state.quiz.questionAmount
  };
}

export default connect(mapStateToProps)(Quiz);
