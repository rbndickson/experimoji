import { ADD_FLASHCARD } from "../actions";

const initialMemoryState = {
  score: 0,
  flashcards: {}
};

function memory(state = initialMemoryState, action) {
  const flashcard = action;

  switch (action.type) {
    case ADD_FLASHCARD:
      return {
        ...state,
        flashcards: {
          ...state["flashcards"],
          [flashcard.position]: {
            flashcardType: flashcard.flashcardType,
            data: flashcard.data,
            isShown: flashcard.isShown
          }
        }
      };
    default:
      return state;
  }
}

export default memory;
