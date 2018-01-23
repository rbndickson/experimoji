import { UPDATE_CURRENT_QUESTION_INDEX } from "../actions";
import { SET_SHOW_QUIZ_ANSWER } from "../actions";

const initialQuizState = {
  currentQuestionIndex: 0,
  score: 0,
  showQuizAnswer: false
};

function quiz(state = initialQuizState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default quiz;
