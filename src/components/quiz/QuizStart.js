import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { updateQuizScreen } from "../../actions";
import QuizSettings from "./QuizSettings";
import Button from "../Button";

class QuizStart extends Component {
  startQuiz() {
    this.props.dispatch(updateQuizScreen("game"));
  }

  render() {
    return (
      <div>
        <QuizSettings />
        <section>
          <Button
            onClick={() => this.startQuiz()}
            text="Start Quiz"
            classModifier="Button-small Button-green"
          />
        </section>
      </div>
    );
  }
}

export default connect()(QuizStart);
