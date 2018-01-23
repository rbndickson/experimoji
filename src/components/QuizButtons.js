import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../utils/helpers";
import QuizButton from "./QuizButton";

class QuizButtons extends Component {
  render() {
    const incorrectFlashcards = shuffle(
      this.props.flashcards.filter(f => f !== this.props.flashcard)
    );

    const answers = shuffle([
      this.props.flashcard.english,
      incorrectFlashcards[0].english,
      incorrectFlashcards[1].english
    ]);

    return <div>{answers.map(e => <QuizButton key={e} answer={e} />)}</div>;
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards);

  return {
    flashcard: flashcards[state.quiz.currentQuestionIndex],
    flashcards: flashcards,
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizButtons);
