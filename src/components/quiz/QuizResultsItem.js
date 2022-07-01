import React from "react";
import { connect } from "react-redux";
import Emoji from "../Emoji";
import { css } from "@emotion/css";

const styles = css`
  display: flex;
  align-items: center;
  max-width: 200px;
  margin: 0 auto 6px auto;
`;

function QuizResultsItem({ emojiCode, vocabulary }) {
  return (
    <li className={styles}>
      <Emoji
        emojiCode={emojiCode}
        styles={{ width: 25, height: 25, marginRight: 10 }}
        altText={vocabulary}
      />
      {vocabulary}
    </li>
  );
}

export default connect()(QuizResultsItem);
