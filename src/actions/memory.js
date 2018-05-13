export const ADD_FLASHCARD = "ADD_FLASHCARD";
export const UPDATE_FLASHCARD_STATUS = "UPDATE_FLASHCARD_STATUS";
export const SET_CLICKABLE = "SET_CLICKABLE";
export const UPDATE_MEMORY_GAME_SCORE = "UPDATE_MEMORY_GAME_SCORE";

export function addFlashcard({
  position,
  flashcardType,
  vocabulary,
  emojiCode
}) {
  return {
    type: ADD_FLASHCARD,
    position,
    flashcardType,
    vocabulary,
    emojiCode
  };
}

export function updateFlashcardStatus({ position, status }) {
  return {
    type: UPDATE_FLASHCARD_STATUS,
    position,
    status
  };
}
marp;
export function setClickable(isClickable) {
  return {
    type: SET_CLICKABLE,
    isClickable
  };
}

export function updateMemoryGameScore(score) {
  return {
    type: UPDATE_MEMORY_GAME_SCORE,
    score
  };
}
