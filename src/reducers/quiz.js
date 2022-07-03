import { data } from "../data";

import {
  UPDATE_QUIZ_SCREEN,
  SET_QUESTIONS,
  UPDATE_CURRENT_QUESTION_INDEX,
  SET_SHOW_QUIZ_ANSWER,
  UPDATE_SCORE,
  RECORD_ANSWER_RESULT,
  UPDATE_QUIZ_QUESTION_AMOUNT,
  UPDATE_QUIZ_LEVEL,
  RESET_QUIZ,
} from "../actions";

const initialQuizState = {
  language: data.language,
  category: data.category,
  languageEmojiCode: data.languageEmojiCode,
  categoryEmojicode: data.categoryEmojicode,
  currentQuestionIndex: 0,
  score: 0,
  showQuizAnswer: false,
  quizScreenUpdated: "settings",
  questionAmount: 10,
  level: "easy",
  isClickable: true,
};

function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case UPDATE_QUIZ_SCREEN:
      return {
        ...state,
        quizScreenUpdated: action.screen,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    case UPDATE_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.questionIndex,
      };
    case SET_SHOW_QUIZ_ANSWER:
      return {
        ...state,
        showQuizAnswer: action.showQuizAnswer,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score,
      };
    case RECORD_ANSWER_RESULT:
      return {
        ...state,
        questions: {
          ...state["questions"],
          [action.questionIndex]: {
            ...state["questions"][action.questionIndex],
            answerResult: action.answerResult,
          },
        },
      };
    case UPDATE_QUIZ_QUESTION_AMOUNT:
      return {
        ...state,
        questionAmount: action.questionAmount,
      };
    case UPDATE_QUIZ_LEVEL:
      return {
        ...state,
        level: action.level,
      };
    case RESET_QUIZ:
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
      };
    default:
      return state;
  }
}

export default quiz;
