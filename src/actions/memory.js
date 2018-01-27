export const ADD_FLASHCARD = "ADD_FLASHCARD";
export const UPDATE_FLASHCARD_STATUS = "UPDATE_FLASHCARD_STATUS";

export function addFlashcard({
  position,
  flashcardType,
  data,
  emojiCode,
  status
}) {
  return {
    type: ADD_FLASHCARD,
    position,
    flashcardType,
    data,
    emojiCode,
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
