import React, { Component } from "react";
import { connect } from "react-redux";
import { emojiSrc } from "../../utils/helpers";
import QuizButtons from "./QuizButtons";
import "./QuizQuestion.css";

class QuizQuestion extends Component {
  render() {
    return (
      <div className={"QuizQuestion"}>
        <img
          alt={this.props.flashcard.english}
          src={emojiSrc(this.props.flashcard.emojiCode)}
        />
        <QuizButtons />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = state.quiz.flashcards;

  return {
    flashcard: flashcards[state.quiz.currentQuestionIndex]
  };
}

export default connect(mapStateToProps)(QuizQuestion);
