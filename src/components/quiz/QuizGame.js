import React, { Component } from "react";
import { connect } from "react-redux";
import {
  quizCurrentQuestionIndexUpdated,
  quizScoreUpdated,
  quizQuestionsUpdated,
} from "../../features/quiz/quizSlice";
import { shuffle } from "../../utils/helpers";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import QuizFooter from "./QuizFooter";

class QuizGame extends Component {
  componentDidMount() {
    // Reset quiz
    this.props.dispatch(quizScoreUpdated(0));
    this.props.dispatch(quizCurrentQuestionIndexUpdated(0));
    if (this.props.questions) {
      this.setRetryQuestions();
    } else {
      this.setNewQuizQuestions();
    }
  }

  setNewQuizQuestions() {
    const shuffledFlashcards = shuffle(this.props.flashcards);
    const questions = shuffledFlashcards.reduce((acc, e, i) => {
      acc[i] = this.createQuestion(e);
      return acc;
    }, {});

    this.props.dispatch(quizQuestionsUpdated(questions));
  }

  setRetryQuestions() {
    const questions = Object.values(this.props.questions).reduce(
      (acc, e, i) => {
        acc[i] = {
          vocabulary: e.vocabulary,
          emojiCode: e.emojiCode,
          incorrectAnswers: e.incorrectAnswers,
        };
        return acc;
      },
      {}
    );

    this.props.dispatch(quizQuestionsUpdated(questions));
  }

  createQuestion(flashcard) {
    const incorrectAnswers = shuffle(
      this.props.flashcards
        .filter((f) => f !== flashcard)
        .map((f) => f.vocabulary)
    ).splice(0, 5);

    return { ...flashcard, incorrectAnswers: incorrectAnswers };
  }

  render() {
    return (
      <div>
        <QuizHeader />
        {this.props.questions && <QuizQuestion />}
        <QuizFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state.flashcards,
    questions: state.quiz.questions,
    questionIndex: state.quiz.questionIndex,
  };
}

export default connect(mapStateToProps)(QuizGame);
