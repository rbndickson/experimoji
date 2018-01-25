export const ADD_FLASHCARD = "ADD_FLASHCARD";

export function addFlashcard({ position, flashcardType, data, status }) {
  return {
    type: ADD_FLASHCARD,
    position,
    flashcardType,
    data,
    status
  };
}
