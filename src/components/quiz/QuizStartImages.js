import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";
import Emoji from "../Emoji";

const styles = css`
  @media (max-width: 600px) {
    display: none;
  }
`;

const emojiStyles = { height: 90, width: 90, padding: 10 };

function QuizStartImages({ categoryEmojicode, languageEmojiCode }) {
  return (
    <section className={styles}>
      <Emoji emojiCode={languageEmojiCode} altText={""} styles={emojiStyles} />
      <Emoji emojiCode={categoryEmojicode} altText={""} styles={emojiStyles} />
    </section>
  );
}

function mapStateToProps(state) {
  return {
    languageEmojiCode: state.information.languageEmojiCode,
    categoryEmojicode: state.information.categoryEmojicode,
  };
}

export default connect(mapStateToProps)(QuizStartImages);
