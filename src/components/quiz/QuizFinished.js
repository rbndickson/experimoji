import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuizScreen, resetQuiz } from "../../actions";
import Button from "../Button";

class QuizFinished extends Component {
  goToSettings() {
    this.props.dispatch(updateQuizScreen("settings"));
    this.props.dispatch(resetQuiz());
  }

  tryAgain() {
    this.props.dispatch(updateQuizScreen("game"));
    this.props.dispatch(resetQuiz());
  }

  render() {
    return (
      <div>
        <h2>Quiz complete!</h2>
        <p>{`You scored ${this.props.score} out of ${
          this.props.currentQuestionIndex
        }.`}</p>
        <Button
          onClick={() => this.tryAgain()}
          text={"Try Again"}
          classModifier={"Button-small"}
        />
        <Button
          onClick={() => this.goToSettings()}
          text={"Settings"}
          classModifier={"Button-small"}
        />
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
