import { createSlice } from "@reduxjs/toolkit";

const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState: { score: 0, flashcards: {}, isClickable: true },
  reducers: {
    memoryGameFlashcardsAdded(state, action) {
      state.flashcards[action.payload.position] = {
        flashcardType: action.payload.flashcardType,
        vocabulary: action.payload.vocabulary,
        emojiCode: action.payload.emojiCode,
        isSelected: false,
        isMatched: false,
        position: action.payload.position,
      };
    },
    memoryGameFlashcardsSelected(state, action) {
      const flashcard = state.flashcards[action.payload.flashcard.position];
      flashcard.isSelected = true;
    },
    memoryGameFlashcardsDeselected(state, action) {
      const flashcard = state.flashcards[action.payload.flashcard.position];
      flashcard.isSelected = false;
    },
    memoryGameFlashcardsMatched(state, action) {
      const flashcard = state.flashcards[action.payload.flashcard.position];
      flashcard.isMatched = true;
    },
    memoryGameClickable(state, action) {
      state.isClickable = action.payload;
    },
    memoryGameScore(state, action) {
      state.score = action.payload.score;
    },
  },
});

export const {
  memoryGameFlashcardsAdded,
  memoryGameFlashcardsSelected,
  memoryGameFlashcardsDeselected,
  memoryGameFlashcardsMatched,
  memoryGameClickable,
  memoryGameScore,
} = memoryGameSlice.actions;
export default memoryGameSlice.reducer;
