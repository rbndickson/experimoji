import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { emojiSrc, shuffle } from "../../utils/helpers";
import QuizButtons from "./QuizButtons";

const styles = css`
  width: 160px;
  margin: 20px auto;
`;

class QuizQuestion extends Component {
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
    return (
      <div className={styles}>
        <img
          alt={this.props.flashcard.english}
          src={emojiSrc(this.props.flashcard.emojiCode)}
        />
        <QuizButtons answers={this.state.answers} />
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

export default connect(mapStateToProps)(QuizQuestion);
