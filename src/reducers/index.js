import { combineReducers } from "redux";
import flashcards from "./flashcards";
import experiments from "./experiments";
import quiz from "./quiz";

export default combineReducers({
  experiments,
  flashcards,
  quiz
});
