export const UPDATE_QUIZ_SCREEN = "UPDATE_QUIZ_SCREEN";
export const SET_QUESTIONS = "SET_QUESTIONS";
export const UPDATE_CURRENT_QUESTION_INDEX = "UPDATE_CURRENT_QUESTION_INDEX";
export const SET_SHOW_QUIZ_ANSWER = "SET_SHOW_QUIZ_ANSWER";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const RECORD_ANSWER_RESULT = "RECORD_ANSWER_RESULT";
export const UPDATE_QUIZ_QUESTION_AMOUNT = "UPDATE_QUIZ_QUESTION_AMOUNT";
export const RESET_QUIZ = "RESET_QUIZ";
export const UPDATE_QUIZ_LEVEL = "UPDATE_QUIZ_LEVEL";

export function updateQuizScreen(screen) {
  return {
    type: UPDATE_QUIZ_SCREEN,
    screen,
  };
}

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}

export function updateCurrentQuestionIndex(questionIndex) {
  return {
    type: UPDATE_CURRENT_QUESTION_INDEX,
    questionIndex,
  };
}

export function setShowQuizAnswer(showQuizAnswer) {
  return {
    type: SET_SHOW_QUIZ_ANSWER,
    showQuizAnswer,
  };
}

export function updateScore(score) {
  return {
    type: UPDATE_SCORE,
    score,
  };
}

export function recordAnswerResult(questionIndex, answerResult) {
  return {
    type: RECORD_ANSWER_RESULT,
    questionIndex,
    answerResult,
  };
}

export function updateQuizQuestionAmount(questionAmount) {
  return {
    type: UPDATE_QUIZ_QUESTION_AMOUNT,
    questionAmount,
  };
}

export function updateQuizLevel(level) {
  return {
    type: UPDATE_QUIZ_LEVEL,
    level,
  };
}

export function resetQuiz() {
  return {
    type: RESET_QUIZ,
  };
}
