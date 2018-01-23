import { UPDATE_CURRENT_QUESTION_INDEX } from "../actions";

const initialQuizState = {
  currentQuestionIndex: 0,
  score: 0
};

function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.questionIndex
      };
    default:
      return state;
  }
}

export default quiz;
