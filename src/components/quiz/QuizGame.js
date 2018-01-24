import React, { Component } from "react";
import { connect } from "react-redux";
import { setQuizFlashcards } from "../../actions";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import QuizAnswer from "./QuizAnswer";
import QuizButtons from "./QuizButtons";

class QuizGame extends Component {
  componentWillMount() {
    this.props.dispatch(setQuizFlashcards(this.props.flashcards));
  }

  render() {
    return (
      <div>
        <QuizHeader />
        <QuizQuestion />
        <QuizAnswer />
        <QuizButtons />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards),
    questionIndex: state.quiz.questionIndex
  };
}

export default connect(mapStateToProps)(QuizGame);
