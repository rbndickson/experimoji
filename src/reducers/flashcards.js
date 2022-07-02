import { data } from "../data";

const initialFlashcardsState = data.flashcards;

function flashcards(state = initialFlashcardsState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default flashcards;
