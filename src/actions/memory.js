export const ADD_FLASHCARD = "ADD_FLASHCARD";
export const SELECT_FLASHCARD = "SELECT_FLASHCARD";
export const DESELECT_FLASHCARD = "DESELECT_FLASHCARD";
export const SET_FLASHCARD_TO_MATCHED = "SET_FLASHCARD_TO_MATCHED";
export const SET_CLICKABLE = "SET_CLICKABLE";
export const UPDATE_MEMORY_GAME_SCORE = "UPDATE_MEMORY_GAME_SCORE";

export function addFlashcard({
  position,
  flashcardType,
  vocabulary,
  emojiCode,
}) {
  return {
    type: ADD_FLASHCARD,
    position,
    flashcardType,
    vocabulary,
    emojiCode,
  };
}

export function selectFlashcard({ flashcard }) {
  return {
    type: SELECT_FLASHCARD,
    flashcard,
  };
}

export function deselectFlashcard({ flashcard }) {
  return {
    type: DESELECT_FLASHCARD,
    flashcard,
  };
}

export function setFlashcardToMatched({ flashcard }) {
  return {
    type: SET_FLASHCARD_TO_MATCHED,
    flashcard,
  };
}

export function setClickable(isClickable) {
  return {
    type: SET_CLICKABLE,
    isClickable,
  };
}

export function updateMemoryGameScore(score) {
  return {
    type: UPDATE_MEMORY_GAME_SCORE,
    score,
  };
}
