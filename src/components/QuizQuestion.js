import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../utils/helpers";

class QuizQuestion extends Component {
  state = {
    showAnswer: false
  };

  showAnswer() {
    this.setState({ showAnswer: true });
  }

  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  render() {
    return (
      <div>
        <div className={"quiz-image"}>
          <img src={this.emojiSrc(this.props.flashcard.emojiCode)} />
        </div>
        {this.state.showAnswer && <div>{this.props.flashcard.english}</div>}
        <button onClick={() => this.showAnswer()}>
          {this.props.flashcard.english}
        </button>
        <button onClick={() => this.showAnswer()}>
          {this.props.incorrectAnswer1}
        </button>
        <button onClick={() => this.showAnswer()}>
          {this.props.incorrectAnswer2}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards);
  const flashcard = flashcards[state.quiz.questionIndex];

  const incorrectFlashcards = flashcards.filter(f => f !== flashcard);
  const shuffledIncorrectFlashcards = shuffle(incorrectFlashcards);

  return {
    flashcard: flashcards[state.quiz.questionIndex],
    incorrectAnswer1: shuffledIncorrectFlashcards[0].english,
    incorrectAnswer2: shuffledIncorrectFlashcards[1].english
  };
}

export default connect(mapStateToProps)(QuizQuestion);
