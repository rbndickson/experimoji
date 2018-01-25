export const ADD_FLASHCARD = "ADD_FLASHCARD";
export const UPDATE_FLASHCARD_STATUS = "UPDATE_FLASHCARD_STATUS";

export function addFlashcard({ position, flashcardType, data, status }) {
  return {
    type: ADD_FLASHCARD,
    position,
    flashcardType,
    data,
    status
  };
}

export function updateFlashcardStatus({ position, status }) {
  return {
    type: UPDATE_FLASHCARD_STATUS,
    position,
    status
  };
}
