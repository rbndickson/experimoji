import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuizScreen } from "../../actions";
import Button from "../Button";

class QuizSettings extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  render() {
    return (
      <section>
        <div>Settings</div>
        <Button
          onClick={() => this.startQuiz()}
          text="Start Quiz"
          classModifier="Button-small"
        />
      </section>
    );
  }
}

export default connect()(QuizSettings);
