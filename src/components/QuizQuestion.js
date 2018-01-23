import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../utils/helpers";
import QuizButton from "./QuizButton";

class QuizQuestion extends Component {
  state = {
    showAnswer: false
  };

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
          <img
            alt={this.props.flashcard.english}
            src={this.emojiSrc(this.props.flashcard.emojiCode)}
          />
        </div>
        <div className={"quiz-answer"}>
          {this.props.showQuizAnswer && (
            <div>{this.props.flashcard.english}</div>
          )}
        </div>
        {answers.map(e => <QuizButton key={e} answer={e} />)}
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
    incorrectAnswer2: shuffledIncorrectFlashcards[1].english,
    showQuizAnswer: state.quiz.showQuizAnswer
  };
}

export default connect(mapStateToProps)(QuizQuestion);
