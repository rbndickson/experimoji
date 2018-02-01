import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuizScreen, resetQuiz, setQuizRetry } from "../../actions";
import QuizResultsList from "./QuizResultsList";
import Button from "../Button";

class QuizFinished extends Component {
  goToSettings() {
    this.props.dispatch(updateQuizScreen("settings"));
    this.props.dispatch(resetQuiz());
  }

  tryAgainNewCards() {
    this.props.dispatch(setQuizRetry(false));
    this.props.dispatch(updateQuizScreen("game"));
    this.props.dispatch(resetQuiz());
  }

  tryAgainSameCards() {
    this.props.dispatch(setQuizRetry(true));
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
        <div className={"QuizFinished-buttons"}>
          <Button
            onClick={() => this.tryAgainSameCards()}
            text={"Retry Same Cards"}
            classModifier={"Button-medium"}
          />
          <Button
            onClick={() => this.tryAgainNewCards()}
            text={"Try Again With New Cards"}
            classModifier={"Button-medium"}
          />
          <Button
            onClick={() => this.goToSettings()}
            text={"Settings"}
            classModifier={"Button-medium"}
          />
          <QuizResultsList />
        </div>
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
