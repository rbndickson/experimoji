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
    const answers = this.createAnswers(
      Object.values(this.props.flashcards),
      this.props.flashcard
    );
    this.setState({ answers: answers });
  }

  componentWillReceiveProps(nextProps) {
    const answers = this.createAnswers(
      Object.values(nextProps.flashcards),
      nextProps.flashcard
    );
    this.setState({ answers: answers });
  }

  createAnswers(flashcards, correctFlashcard) {
    let answers = [];

    const incorrectFlashcards = shuffle(
      flashcards.filter(f => f !== correctFlashcard)
    );

    const shuffledIncorrectAnswers = shuffle(
      incorrectFlashcards.map(flashcard => flashcard.english)
    );

    this.props.level === "easy"
      ? (answers = shuffledIncorrectAnswers.splice(0, 2))
      : (answers = shuffledIncorrectAnswers.splice(0, 5));

    answers.push(correctFlashcard.english);

    return shuffle(answers);
  }

  render() {
    return this.props.level === "easy" ? (
      <div className={"QuizButtons"}>
        {this.state.answers.map(e => <QuizButton key={e} answer={e} />)}
      </div>
    ) : (
      <div className={"QuizButtons"}>
        <div className={"QuizButtons-col"}>
          {this.state.answers
            .splice(0, 3)
            .map(e => <QuizButton key={e} answer={e} />)}
        </div>
        <div className={"QuizButtons-col"}>
          {this.state.answers
            .splice(0, 3)
            .map(e => <QuizButton key={e} answer={e} />)}
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
