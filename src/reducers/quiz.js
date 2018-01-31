import { UPDATE_QUIZ_SCREEN } from "../actions";
import { SET_QUIZ_FLASHCARDS } from "../actions";
import { UPDATE_CURRENT_QUESTION_INDEX } from "../actions";
import { SET_SHOW_QUIZ_ANSWER } from "../actions";
import { UPDATE_SCORE } from "../actions";
import { UPDATE_QUIZ_QUESTION_AMOUNT } from "../actions";
import { RESET_QUIZ } from "../actions";

const initialQuizState = {
  currentQuestionIndex: 0,
  score: 0,
  showQuizAnswer: false,
  quizScreen: "settings",
  questionAmount: 10
};

function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case UPDATE_QUIZ_SCREEN:
      return {
        ...state,
        quizScreen: action.screen
      };
    case SET_QUIZ_FLASHCARDS:
      return {
        ...state,
        flashcards: action.flashcards
      };
    case UPDATE_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.questionIndex
      };
    case SET_SHOW_QUIZ_ANSWER:
      return {
        ...state,
        showQuizAnswer: action.showQuizAnswer
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score
      };
    case UPDATE_QUIZ_QUESTION_AMOUNT:
      return {
        ...state,
        questionAmount: action.questionAmount
      };
    case RESET_QUIZ:
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0
      };
    default:
      return state;
  }
}

export default quiz;
