import React, { Component } from "react";
import { connect } from "react-redux";
import { setQuizFlashcards } from "../../actions";
import { shuffle } from "../../utils/helpers";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import QuizFooter from "./QuizFooter";

class QuizGame extends Component {
  componentWillMount() {
    if (this.props.isRetry) {
      this.resetQuizFlashcardsResults();
    } else {
      this.props.dispatch(
        setQuizFlashcards(shuffle(Object.values(this.props.flashcards)))
      );
    }
  }

  resetQuizFlashcardsResults() {
    const flashcards = Object.values(this.props.quizFlashcards).map(e => ({
      vocabulary: e.vocabulary,
      emojiCode: e.emojiCode
    }));

    this.props.dispatch(setQuizFlashcards(flashcards));
  }

  render() {
    return (
      <div>
        <QuizHeader />
        <QuizQuestion />
        <QuizFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.flashcards,
    quizFlashcards: state.quiz.flashcards,
    questionIndex: state.quiz.questionIndex,
    isRetry: state.quiz.isRetry
  };
}

export default connect(mapStateToProps)(QuizGame);
