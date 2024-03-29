import React, { Component } from "react";
import { connect } from "react-redux";
import { quizScreenUpdated } from "../../features/quiz/quizSlice";
import Title from "../Title";
import QuizStart from "./QuizStart";
import QuizGame from "./QuizGame";
import QuizFinished from "./QuizFinished";

class Quiz extends Component {
  componentDidMount() {
    // Resets the quiz screen to setting when entering quiz
    // otherwise the game can remain half way through if using
    // the home button
    this.props.dispatch(quizScreenUpdated("settings"));
  }

  componentDidUpdate() {
    // Go to the finished screen when finished
    if (
      this.props.screen === "game" &&
      this.props.currentQuestionIndex > this.props.questionAmount - 1
    ) {
      this.props.dispatch(quizScreenUpdated("finished"));
    }
  }

  render() {
    return (
      <div>
        <Title text={`${this.props.language} ${this.props.category} Quiz`} />
        {this.props.screen === "finished" && <QuizFinished />}
        {this.props.screen === "settings" && <QuizStart />}
        {this.props.screen === "game" && <QuizGame />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.information.language,
    category: state.information.category,
    screen: state.quiz.screen,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    questionAmount: state.quiz.questionAmount,
  };
}

export default connect(mapStateToProps)(Quiz);
