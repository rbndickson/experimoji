import { ADD_FLASHCARD, UPDATE_FLASHCARD_STATUS } from "../actions";

const initialMemoryState = {
  score: 0,
  flashcards: {}
};

function memory(state = initialMemoryState, action) {
  switch (action.type) {
    case ADD_FLASHCARD:
      return {
        ...state,
        flashcards: {
          ...state["flashcards"],
          [action.position]: {
            flashcardType: action.flashcardType,
            data: action.data,
            emojiCode: action.emojiCode,
            status: action.status
          }
        }
      };
    case UPDATE_FLASHCARD_STATUS:
      return {
        ...state,
        flashcards: {
          ...state["flashcards"],
          [action.position]: {
            ...state["flashcards"][action.position],
            status: action.status
          }
        }
      };
    default:
      return state;
  }
}

export default memory;
