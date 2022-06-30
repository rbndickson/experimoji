import { data } from "../data";

const initialState = {
  language: data.language,
  category: data.category,
  languageEmojiCode: data.languageEmojiCode,
  categoryEmojicode: data.categoryEmojicode,
};

function worksheet(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default worksheet;
