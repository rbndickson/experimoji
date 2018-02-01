export const UPDATE_QUIZ_SCREEN = "UPDATE_QUIZ_SCREEN";
export const SET_QUIZ_FLASHCARDS = "SET_QUIZ_FLASHCARDS";
export const UPDATE_CURRENT_QUESTION_INDEX = "UPDATE_CURRENT_QUESTION_INDEX";
export const SET_SHOW_QUIZ_ANSWER = "SET_SHOW_QUIZ_ANSWER";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const RECORD_ANSWER_RESULT = "RECORD_ANSWER_RESULT";
export const UPDATE_QUIZ_QUESTION_AMOUNT = "UPDATE_QUIZ_QUESTION_AMOUNT";
export const RESET_QUIZ = "RESET_QUIZ";
export const SET_QUIZ_RETRY = "SET_QUIZ_RETRY";
export const UPDATE_QUIZ_LEVEL = "UPDATE_QUIZ_LEVEL";

export function updateQuizScreen(screen) {
  return {
    type: UPDATE_QUIZ_SCREEN,
    screen
  };
}

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

export function recordAnswerResult(flashcardIndex, answerResult) {
  return {
    type: RECORD_ANSWER_RESULT,
    flashcardIndex,
    answerResult
  };
}

export function updateQuizQuestionAmount(questionAmount) {
  return {
    type: UPDATE_QUIZ_QUESTION_AMOUNT,
    questionAmount
  };
}

export function updateQuizLevel(level) {
  return {
    type: UPDATE_QUIZ_LEVEL,
    level
  };
}

export function resetQuiz() {
  return {
    type: RESET_QUIZ
  };
}

export function setQuizRetry(isRetry) {
  return {
    type: SET_QUIZ_RETRY,
    isRetry
  };
}
