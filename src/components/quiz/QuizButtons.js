import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuizButtons.css";
import QuizButton from "./QuizButton";

class QuizButtons extends Component {
  render() {
    const { answers } = this.props;

    return this.props.level === "easy" ? (
      <div className={"QuizButtons"}>
        {answers.map(e => <QuizButton key={e} answer={e} />)}
      </div>
    ) : (
      <div className={"QuizButtons"}>
        <div className={"QuizButtons-col"}>
          {answers.splice(0, 3).map(e => <QuizButton key={e} answer={e} />)}
        </div>
        <div className={"QuizButtons-col"}>
          {answers.splice(0, 3).map(e => <QuizButton key={e} answer={e} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    level: state.quiz.level
  };
}

export default connect(mapStateToProps)(QuizButtons);
