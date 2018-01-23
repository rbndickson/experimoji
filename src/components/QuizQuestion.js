import React, { Component } from "react";
import { connect } from "react-redux";

class QuizQuestion extends Component {
  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  render() {
    return (
      <div className={"quiz-image"}>
        <img
          alt={this.props.flashcard.english}
          src={this.emojiSrc(this.props.flashcard.emojiCode)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards);

  return {
    currentQuestionIndex: state.quiz.currentQuestionIndex,
    flashcard: flashcards[state.quiz.currentQuestionIndex]
  };
}

export default connect(mapStateToProps)(QuizQuestion);
