import React from "react";
import { connect } from "react-redux";
import { shuffle } from "../../utils/helpers";
import Emoji from "../Emoji";

function QuizResultEmoji({ currentQuestionIndex, score }) {
  const oneHundredEmojiCode = "1f4af",
    partyPopperEmojiCode = "1f389",
    starEmojiCode = "1f4ab",
    highFiveEmojiCode = "1f64c",
    rocketEmojiCode = "1f680",
    smileyCatEmojiCode = "1f63a",
    writingEmojiCode = "270d",
    cloverEmojiCode = "1f340",
    booksEmojiCode = "1f4da",
    seedingEmojiCode = "1f340";

  const resultToResultEmoji = {
    perfect: [oneHundredEmojiCode, partyPopperEmojiCode],
    great: [starEmojiCode, highFiveEmojiCode],
    good: [smileyCatEmojiCode, rocketEmojiCode],
    poor: [writingEmojiCode, cloverEmojiCode],
    veryPoor: [seedingEmojiCode, booksEmojiCode],
  };

  const resultEmoji = () => {
    const resultPercentage = (score / currentQuestionIndex) * 100;

    if (resultPercentage === 100)
      return shuffle(resultToResultEmoji["perfect"])[0];
    else if (resultPercentage >= 75)
      return shuffle(resultToResultEmoji["great"])[0];
    else if (resultPercentage >= 50)
      return shuffle(resultToResultEmoji["good"])[0];
    else if (resultPercentage >= 25)
      return shuffle(resultToResultEmoji["poor"])[0];
    else return resultToResultEmoji["veryPoor"][0];
  };

  return (
    <Emoji
      emojiCode={resultEmoji()}
      altText=""
      styles={{ height: 150, width: 150, margin: "0 auto 20px auto" }}
    />
  );
}

function mapStateToProps(state) {
  return {
    score: state.quiz.score,
    currentQuestionIndex: state.quiz.currentQuestionIndex,
  };
}

export default connect(mapStateToProps)(QuizResultEmoji);
