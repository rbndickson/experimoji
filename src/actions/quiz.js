export const SET_QUIZ_FLASHCARDS = "SET_QUIZ_FLASHCARDS";
export const UPDATE_CURRENT_QUESTION_INDEX = "UPDATE_CURRENT_QUESTION_INDEX";
export const SET_SHOW_QUIZ_ANSWER = "SET_SHOW_QUIZ_ANSWER";
export const UPDATE_SCORE = "UPDATE_SCORE";

export function setQuizFlashcards(flashcards) {
  return {
    type: SET_QUIZ_FLASHCARDS,
    flashcards
  };
}

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

export function updateScore(score) {
  return {
    type: UPDATE_SCORE,
    score
  };
}
