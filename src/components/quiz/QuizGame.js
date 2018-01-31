import React, { Component } from "react";
import { connect } from "react-redux";
import { setQuizFlashcards } from "../../actions";
import { shuffle } from "../../utils/helpers";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import QuizButtons from "./QuizButtons";
import QuizFooter from "./QuizFooter";

class QuizGame extends Component {
  componentWillMount() {
    this.props.dispatch(setQuizFlashcards(this.props.flashcards));
  }

  render() {
    return (
      <div>
        <QuizHeader />
        <QuizQuestion />
        <QuizButtons />
        <QuizFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: shuffle(Object.values(state.flashcards)),
    questionIndex: state.quiz.questionIndex
  };
}

export default connect(mapStateToProps)(QuizGame);
