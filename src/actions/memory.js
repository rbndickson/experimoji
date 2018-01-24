export const ADD_FLASHCARD = "ADD_FLASHCARD";

export function addFlashcard({ position, flashcardType, data, isShown }) {
  return {
    type: ADD_FLASHCARD,
    position,
    flashcardType,
    data,
    isShown
  };
}
