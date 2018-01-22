import { combineReducers } from "redux";
import flashcards from "./flashcards";
import experiments from "./experiments";

export default combineReducers({
  experiments,
  flashcards
});
