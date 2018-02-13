import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../../utils/helpers";
import "./QuizButtons.css";
import QuizButton from "./QuizButton";

class QuizButtons extends Component {
  state = {
    answers: []
  };

  shouldComponentUpdate(nextProps) {
    return this.props.currentQuestionIndex !== nextProps.currentQuestionIndex;
  }

  componentWillMount() {
    this.setAnswers(this.props.flashcards, this.props.flashcard);
  }

  componentWillReceiveProps(nextProps) {
    this.setAnswers(nextProps.flashcards, nextProps.flashcard);
  }

  setAnswers(flashcards, flashcard) {
    const answers = this.createAnswers(Object.values(flashcards), flashcard);
    this.setState({ answers: answers });
  }

  createAnswers(flashcards, correctFlashcard) {
    const incorrectFlashcards = shuffle(
      flashcards
        .filter(f => f !== correctFlashcard)
        .map(flashcard => flashcard.english)
    );

    const answers =
      this.props.level === "easy"
        ? incorrectFlashcards.splice(0, 2)
        : incorrectFlashcards.splice(0, 5);

    answers.push(correctFlashcard.english);

    return shuffle(answers);
  }

  render() {
    const { answers } = this.state;

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
  const flashcards = state.quiz.flashcards;

  return {
    flashcard: flashcards[state.quiz.currentQuestionIndex],
    flashcards: flashcards,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    level: state.quiz.level
  };
}

export default connect(mapStateToProps)(QuizButtons);
