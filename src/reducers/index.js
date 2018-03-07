import { combineReducers } from "redux";
import flashcards from "./flashcards";
import experiments from "./experiments";
import quiz from "./quiz";
import memory from "./memory";
import worksheet from "./worksheet";

export default combineReducers({
  experiments,
  flashcards,
  quiz,
  memory,
  worksheet
});
