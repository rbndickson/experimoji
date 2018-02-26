import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { emojiSrc } from "../../utils/helpers";

const quizStartImagesStyles = css`
  @media (max-width: 600px) {
    display: none;
  }
`;

const emojiStyles = css`
  height: 90px;
  width: 90px;
  padding: 10px;
  box-sizing: border-box;
`;

class QuizStartImages extends Component {
  render() {
    return (
      <section className={quizStartImagesStyles}>
        <img
          className={emojiStyles}
          alt="Language emoji icon"
          src={emojiSrc(this.props.languageEmojiCode)}
        />
        <img
          className={emojiStyles}
          alt="Category emoji icon"
          src={emojiSrc(this.props.categoryEmojicode)}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    languageEmojiCode: state.quiz.languageEmojiCode,
    categoryEmojicode: state.quiz.categoryEmojicode
  };
}

export default connect(mapStateToProps)(QuizStartImages);
