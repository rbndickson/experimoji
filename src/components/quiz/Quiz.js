import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuizScreen } from "../../actions";
import Title from "../Title";
import QuizStart from "./QuizStart";
import QuizGame from "./QuizGame";
import QuizFinished from "./QuizFinished";

class Quiz extends Component {
  componentDidMount() {
    // Resets the quiz screen to setting when entering quiz
    // otherwise the game can remain half way through if using
    // the home button
    this.props.dispatch(updateQuizScreen("settings"));
  }

  componentDidUpdate() {
    // Go to the finished screen when finished
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
        <Title text={`${this.props.language} ${this.props.category} Quiz`} />
        {this.props.quizScreen === "finished" && <QuizFinished />}
        {this.props.quizScreen === "settings" && <QuizStart />}
        {this.props.quizScreen === "game" && <QuizGame />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.quiz.language,
    category: state.quiz.category,
    quizScreen: state.quiz.quizScreen,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    questionAmount: state.quiz.questionAmount,
  };
}

export default connect(mapStateToProps)(Quiz);
