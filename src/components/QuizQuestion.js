import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle, sleep } from "../utils/helpers";

import { updateCurrentQuestionIndex } from "../actions";

class QuizQuestion extends Component {
  state = {
    showAnswer: false
  };

  async handleUserAnswer() {
    this.showAnswer();
    await sleep(2000);
    this.hideAnswer();
    this.incrementQuestion();
  }

  showAnswer() {
    this.setState({ showAnswer: true });
  }

  hideAnswer() {
    this.setState({ showAnswer: false });
  }

  incrementQuestion() {
    this.props.dispatch(
      updateCurrentQuestionIndex(this.props.currentQuestionIndex + 1)
    );
  }

  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  render() {
    const answers = shuffle([
      this.props.flashcard.english,
      this.props.incorrectAnswer1,
      this.props.incorrectAnswer2
    ]);

    return (
      <div>
        <div className={"quiz-image"}>
          <img src={this.emojiSrc(this.props.flashcard.emojiCode)} />
        </div>
        <div className={"quiz-answer"}>
          {this.state.showAnswer && <div>{this.props.flashcard.english}</div>}
        </div>
        <button onClick={() => this.handleUserAnswer()}>{answers[0]}</button>
        <button onClick={() => this.handleUserAnswer()}>{answers[1]}</button>
        <button onClick={() => this.handleUserAnswer()}>{answers[2]}</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards);
  const flashcard = flashcards[state.quiz.currentQuestionIndex];

  const incorrectFlashcards = flashcards.filter(f => f !== flashcard);
  const shuffledIncorrectFlashcards = shuffle(incorrectFlashcards);

  return {
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    flashcard: flashcards[state.quiz.currentQuestionIndex],
    incorrectAnswer1: shuffledIncorrectFlashcards[0].english,
    incorrectAnswer2: shuffledIncorrectFlashcards[1].english
  };
}

export default connect(mapStateToProps)(QuizQuestion);
