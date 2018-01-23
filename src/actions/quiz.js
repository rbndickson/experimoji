export const UPDATE_CURRENT_QUESTION_INDEX = "UPDATE_CURRENT_QUESTION_INDEX";

export function updateCurrentQuestionIndex(questionIndex) {
  console.log(questionIndex);
  return {
    type: UPDATE_CURRENT_QUESTION_INDEX,
    questionIndex
  };
}
