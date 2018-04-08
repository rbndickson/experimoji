import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateScore,
  updateCurrentQuestionIndex,
  setQuizFlashcards
} from "../../actions";
import { shuffle } from "../../utils/helpers";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import QuizFooter from "./QuizFooter";

class QuizGame extends Component {
  componentDidMount() {
    this.props.dispatch(updateScore(0));
    this.props.dispatch(updateCurrentQuestionIndex(0));
    if (this.props.quizFlashcards) {
      this.setRetryFlashcards();
    } else {
      this.setNewQuizFlashcards();
    }
  }

  setNewQuizFlashcards() {
    const shuffledFlashcards = shuffle(Object.values(this.props.flashcards));
    const flashcards = shuffledFlashcards.reduce((acc, e, i) => {
      acc[i] = e;
      return acc;
    }, {});

    this.props.dispatch(setQuizFlashcards(flashcards));
  }

  setRetryFlashcards() {
    const flashcards = Object.values(this.props.quizFlashcards).reduce(
      (acc, e, i) => {
        acc[i] = {
          vocabulary: e.vocabulary,
          emojiCode: e.emojiCode
        };
        return acc;
      },
      {}
    );

    this.props.dispatch(setQuizFlashcards(flashcards));
  }

  render() {
    return (
      <div>
        <QuizHeader />
        {this.props.quizFlashcards && <QuizQuestion />}
        <QuizFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.flashcards,
    quizFlashcards: state.quiz.flashcards,
    questionIndex: state.quiz.questionIndex
  };
}

export default connect(mapStateToProps)(QuizGame);
