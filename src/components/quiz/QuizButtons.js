import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../../utils/helpers";
import QuizButton from "./QuizButton";

class QuizButtons extends Component {
  state = {
    answers: []
  };

  shouldComponentUpdate(nextProps) {
    return this.props.currentQuestionIndex !== nextProps.currentQuestionIndex;
  }

  componentWillMount() {
    const answers = this.createAnswers(
      this.props.flashcards,
      this.props.flashcard
    );
    this.setState({ answers: answers });
  }

  componentWillReceiveProps(nextProps) {
    const answers = this.createAnswers(
      nextProps.flashcards,
      nextProps.flashcard
    );
    this.setState({ answers: answers });
  }

  createAnswers(flashcards, correctFlashcard) {
    const incorrectFlashcards = shuffle(
      flashcards.filter(f => f !== correctFlashcard)
    );

    return shuffle([
      correctFlashcard.english,
      incorrectFlashcards[0].english,
      incorrectFlashcards[1].english
    ]);
  }

  render() {
    return (
      <div>
        {this.state.answers.map(e => <QuizButton key={e} answer={e} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = state.quiz.flashcards;

  return {
    flashcard: flashcards[state.quiz.currentQuestionIndex],
    flashcards: flashcards,
    currentQuestionIndex: state.quiz.currentQuestionIndex
  };
}

export default connect(mapStateToProps)(QuizButtons);
