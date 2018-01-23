export const UPDATE_CURRENT_QUESTION_INDEX = "UPDATE_CURRENT_QUESTION_INDEX";
export const SET_SHOW_QUIZ_ANSWER = "SET_SHOW_QUIZ_ANSWER";

export function updateCurrentQuestionIndex(questionIndex) {
  return {
    type: UPDATE_CURRENT_QUESTION_INDEX,
    questionIndex
  };
}

export function setShowQuizAnswer(showQuizAnswer) {
  return {
    type: SET_SHOW_QUIZ_ANSWER,
    showQuizAnswer
  };
}
