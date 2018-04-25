import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { updateQuizScreen, resetQuiz } from "../../actions";
import Emoji from "../Emoji";

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const backIconStyles = css`
  width: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-animation: all 0.2s linear infinite;

  &:hover {
    margin-left: -2px;
  }
`;

class QuizFooter extends Component {
  goBack() {
    this.props.dispatch(resetQuiz());
    this.props.dispatch(updateQuizScreen("settings"));
  }

  render() {
    return (
      <div className={styles}>
        <div
          onClick={() => {
            this.goBack();
          }}
        >
          <Emoji
            emojiCode={"1f519"}
            alt="Back button"
            styles={backIconStyles}
          />
        </div>
      </div>
    );
  }
}

export default connect()(QuizFooter);
