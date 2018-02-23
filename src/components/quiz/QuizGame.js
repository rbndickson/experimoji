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
      const previousFlashcards =
        this.props.previousFlashcards || this.props.flashcards;
      const newFlashcards = Object.values(previousFlashcards).map(e => ({
        vocabulary: e.vocabulary,
        emojiCode: e.emojiCode
      }));
      this.props.dispatch(setQuizFlashcards(newFlashcards));
    } else {
      this.props.dispatch(
        setQuizFlashcards(shuffle(Object.values(this.props.flashcards)))
      );
    }
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
    previousFlashcards: state.quiz.flashcards,
    questionIndex: state.quiz.questionIndex,
    isRetry: state.quiz.isRetry
  };
}

export default connect(mapStateToProps)(QuizGame);
