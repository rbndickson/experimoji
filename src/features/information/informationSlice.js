import { createSlice } from "@reduxjs/toolkit";

const informationSlice = createSlice({
  name: "information",
  initialState: {
    language: "",
    category: "",
    languageEmojiCode: "",
    categoryEmojicode: "",
  },
  reducers: {},
});

export default informationSlice.reducer;
