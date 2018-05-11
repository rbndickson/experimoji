import {
  ADD_FLASHCARD,
  UPDATE_FLASHCARD_STATUS,
  SET_CLICKABLE,
  UPDATE_MEMORY_GAME_SCORE
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
            status: action.status,
            position: action.position
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
    case UPDATE_MEMORY_GAME_SCORE:
      return {
        ...state,
        score: action.score
      };
    default:
      return state;
  }
}

export default memory;
