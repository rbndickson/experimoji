import { combineReducers } from "redux";
import flashcards from "./flashcards";
import experiments from "./experiments";
import quiz from "./quiz";
import memory from "./memory";

export default combineReducers({
  experiments,
  flashcards,
  quiz,
  memory
});
