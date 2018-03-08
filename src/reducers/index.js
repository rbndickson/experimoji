import { combineReducers } from "redux";
import flashcards from "./flashcards";
import quiz from "./quiz";
import memory from "./memory";
import worksheet from "./worksheet";

export default combineReducers({
  flashcards,
  quiz,
  memory,
  worksheet
});
