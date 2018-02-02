import {
  ADD_FLASHCARD,
  UPDATE_FLASHCARD_STATUS,
  SET_CLICKABLE
} from "../actions";

const initialMemoryState = {
  score: 0,
  flashcards: {},
  isClickable: true
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
    case SET_CLICKABLE:
      return {
        ...state,
        isClickable: action.isClickable
      };
    default:
      return state;
  }
}

export default memory;
