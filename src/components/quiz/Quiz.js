import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { updateQuizScreen } from "../../actions";
import QuizTitle from "./QuizTitle";
import QuizStart from "./QuizStart";
import QuizGame from "./QuizGame";
import QuizFinished from "./QuizFinished";

const wrapperStyles = css`
  max-width: 600px;
  margin: 0 auto;
`;

const mainStyles = css`
  position: relative;
  background-color: #fff;
  max-width: 600px;
  margin: 0 5px;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(updateQuizScreen("settings"));
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
      <div className={wrapperStyles}>
        <main className={mainStyles}>
          <QuizTitle />
          {this.props.quizScreen === "finished" && <QuizFinished />}
          {this.props.quizScreen === "settings" && <QuizStart />}
          {this.props.quizScreen === "game" && <QuizGame />}
        </main>
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
