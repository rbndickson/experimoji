import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuizScreen } from "../actions";

class QuizSettings extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  render() {
    return (
      <section>
        <div>Settings</div>
        <button onClick={() => this.startQuiz()}>Start Quiz</button>
      </section>
    );
  }
}

export default connect()(QuizSettings);
