import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";
import { updateQuizScreen, resetQuiz } from "../../actions";
import BackButton from "../BackButton";

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

function QuizFooter({ dispatch }) {
  const goBack = () => {
    dispatch(resetQuiz());
    dispatch(updateQuizScreen("settings"));
  };

  return (
    <div className={styles}>
      <BackButton
        onClick={() => {
          goBack();
        }}
      />
    </div>
  );
}

export default connect()(QuizFooter);
