import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import informationReducer from "./features/information/informationSlice";
import memoryGameReducer from "./features/memory_game/memoryGameSlice";
import flashcardsReducer from "./features/flashcards/flashcardsSlice";
import quizReducer from "./features/quiz/quizSlice";

import { data } from "./data";

const reducer = {
  information: informationReducer,
  flashcards: flashcardsReducer,
  memoryGame: memoryGameReducer,
  quiz: quizReducer,
};

const preloadedState = {
  information: {
    language: data.language,
    category: data.category,
    languageEmojiCode: data.languageEmojiCode,
    categoryEmojicode: data.categoryEmojicode,
  },
  flashcards: data.flashcards,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

registerServiceWorker();
