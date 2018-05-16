import {
  ADD_FLASHCARD,
  SELECT_FLASHCARD,
  DESELECT_FLASHCARD,
  SET_FLASHCARD_TO_MATCHED,
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
            vocabulary: action.vocabulary,
            emojiCode: action.emojiCode,
            isSelected: false,
            isMatched: false,
            position: action.position
          }
        }
      };
    case SELECT_FLASHCARD:
      return {
        ...state,
        flashcards: {
          ...state["flashcards"],
          [action.flashcard.position]: {
            ...state["flashcards"][action.flashcard.position],
            isSelected: true
          }
        }
      };
    case DESELECT_FLASHCARD:
      return {
        ...state,
        flashcards: {
          ...state["flashcards"],
          [action.flashcard.position]: {
            ...state["flashcards"][action.flashcard.position],
            isSelected: false
          }
        }
      };
    case SET_FLASHCARD_TO_MATCHED:
      return {
        ...state,
        flashcards: {
          ...state["flashcards"],
          [action.flashcard.position]: {
            ...state["flashcards"][action.flashcard.position],
            isMatched: true
          }
        }
      };
    case SET_CLICKABLE:
      return { ...state, isClickable: action.isClickable };
    case UPDATE_MEMORY_GAME_SCORE:
      return { ...state, score: action.score };
    default:
      return state;
  }
}

export default memory;
