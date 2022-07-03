import { createSlice } from "@reduxjs/toolkit";

import { data } from "../../data";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
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
    // questions
  },
  reducers: {
    quizScreenUpdated(state, action) {
      state.quizScreenUpdated = action.payload;
    },
    quizQuestionAmountUpdated(state, action) {
      state.questionAmount = action.payload;
    },
    quizLevelUpdated(state, action) {
      state.level = action.payload;
    },
    quizCurrentQuestionIndexUpdated(state, action) {
      state.currentQuestionIndex = action.payload;
    },
    quizScoreUpdated(state, action) {
      state.score = action.payload;
    },
    quizQuestionsUpdated(state, action) {
      state.questions = action.payload;
    },
    quizAnswerShown(state, action) {
      state.showQuizAnswer = action.payload;
    },
    quizAnswerCorrect(state, action) {
      state.questions[action.payload].answerResult = "correct";
    },
    quizAnswerIncorrect(state, action) {
      state.questions[action.payload].answerResult = "incorrect";
    },
    quizReset(state, _) {
      state.currentQuestionIndex = 0;
      state.score = 0;
    },
  },
});

export const {
  quizScreenUpdated,
  quizQuestionAmountUpdated,
  quizLevelUpdated,
  quizScoreUpdated,
  quizCurrentQuestionIndexUpdated,
  quizQuestionsUpdated,
  quizAnswerShown,
  quizAnswerCorrect,
  quizAnswerIncorrect,
  quizReset,
} = quizSlice.actions;
export default quizSlice.reducer;
